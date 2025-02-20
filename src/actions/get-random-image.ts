'use server';

import { env } from '@/env';
import { fetcher, p } from '@/lib/utils';
import { db } from '@/server/db';
import { UnsplashResponse } from '@/types/unsplash';
import { RandomImage } from '@prisma/client';

type RetunImageProps = RandomImage & {
  user: UnsplashResponse['user'];
  location: UnsplashResponse['location'];
};

export const getRandomImage = async () => {
  const image = await getImage();
  const isExpired = new Date() >= (image?.expiredAt ?? new Date());

  if (!image || isExpired) {
    const image = await saveImage();
    return image;
  }

  return image;
};

const getImage = async () => {
  const [err, images] = await p(db.randomImage.findMany());

  if (err) return null;

  const image = images[0];

  return (image as RetunImageProps) ?? null;
};

const saveImage = async () => {
  const [errDeleteImages] = await p(db.randomImage.deleteMany());

  if (errDeleteImages) return null;

  const [err, image] = await p<UnsplashResponse>(
    fetcher(
      `https://api.unsplash.com/photos/random/?client_id=${env.UNSPLASH_ACCESS_KEY}`,
    ),
  );

  if (err) return null;

  const date = new Date();

  date.setMinutes(date.getMinutes() + 15);

  const [errNewImage, newImage] = await p(
    db.randomImage.create({
      data: {
        description: image.description ?? image.alt_description,
        expiredAt: date,
        image: image.urls.full,
        location: image.location as never,
        user: image.user as never,
      },
    }),
  );

  if (errNewImage) return null;

  return newImage as RetunImageProps;
};
