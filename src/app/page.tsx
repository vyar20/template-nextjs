import { getRandomImage } from '@/actions/get-random-image';
import Layout from '@/components/layout/layout';
import Image from 'next/image';
import Link from 'next/link';
import SignInWithGoogle from './_components/sign-in-with-google';
import { getSession } from '@/server/auth';
import SignOut from './_components/sign-out';

const Page = async () => {
  const image = await getRandomImage();
  const session = await getSession();

  return (
    <Layout>
      <div className='grid flex-1 grid-cols-6'>
        <div className='col-span-4 flex p-8'>
          {image ? (
            <div className='relative flex flex-1 flex-col overflow-hidden rounded-3xl'>
              <div className='relative z-10 mb-4 ml-4 mt-auto w-fit rounded-md p-4 transition-colors hover:bg-background/20'>
                <Link
                  target='_blank'
                  href={image.user.links.html}
                  className='text-3xl font-semibold hover:text-sky-500 hover:underline'
                >
                  {image.user!.name} -{' '}
                  {image.location.city ?? image.location.country}
                </Link>
                <p className='max-w-72 text-lg'>{image.description}</p>
              </div>

              <Image src={image.image} alt='random-image' fill />
            </div>
          ) : (
            <div className='flex flex-1 items-center justify-center rounded-md bg-muted'>
              <p>No image available</p>
            </div>
          )}
        </div>
        <div className='col-span-2 flex overflow-hidden'>
          <div className='m-auto w-full space-y-4 p-4'>
            <h2 className='inline-flex items-center gap-2 text-xl font-semibold'>
              Welcome Back <span className='text-5xl'>👋</span>
            </h2>
            <pre className='text-wrap'>
              {session
                ? JSON.stringify(session, null, 2)
                : 'No Session Available'}
            </pre>
            <SignInWithGoogle />
            {session && <SignOut />}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
