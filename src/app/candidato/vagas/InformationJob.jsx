import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { Title } from '@/components/shared/Title';

const InformationJob = () => {
  return (
    <>
      <Title className="text-3xl leading-8 mb-10" variant="inverse">
        Informações da vaga
      </Title>
      <div className="grow">
        <p className="text-primary-90 text-lg font-bold">Fiap Ltda</p>
        <p className="text-neutral-90 text-base leading-7 font-normal mt-3">
          <span className="font-bold">Vaga:</span> UI Design
        </p>
        <p className="text-neutral-90 text-base leading-7 font-normal mt-1">
          <span className="font-bold">Contrato:</span> CLT
        </p>
        <p className="text-neutral-90 text-base leading-7 font-normal mt-1">
          <span className="font-bold">Localização:</span> São Paulo - São Paulo
        </p>
        <p className="text-neutral-90 text-base leading-7 font-normal mt-1">
          <span className="font-bold">Salário:</span> R$ 5.500/mês
        </p>
        <p className="text-neutral-90 text-base leading-7 font-normal mt-1">
          <span className="font-bold">Diferencial:</span> Curso Empodera
        </p>
        <p className="text-neutral-90 text-base leading-7 font-normal mt-8 mb-4">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
          of classical Latin literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
          more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
          cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
          of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
          ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
          dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum
          used since the 1500s is reproduced below for those interested.
        </p>
      </div>
      <div className="max-w-[100%] flex justify-center">
        <ButtonPrimary>candidatar-se</ButtonPrimary>
      </div>
    </>
  );
};

export { InformationJob };
