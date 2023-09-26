import Image from 'next/image';

const Loading = () => {
  return (
    <div className="flex justify-center items-center bg-primary-90" style={{ height: '100vh' }}>
      <Image
        src={'/assets/images/logo_recrutaeu_green.png'}
        width={200}
        height={200}
        alt="logo recrutaeu"
        className="hidden lg:block"
      />
    </div>
  );
};

export { Loading };
