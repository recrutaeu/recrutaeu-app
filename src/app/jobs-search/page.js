'use client';
import { themes, withTheme } from '@/contexts/ThemeContext';
import { CandidateSideMenu } from '@/components/candidate';
import { twMerge } from 'tailwind-merge';
import { Card } from '@/components/shared/Card';
import { Title } from '@/components/shared/Title';
import { Input } from 'postcss';
import { InputField } from '@/components/shared/Input/InputField';
import { ArrowLeft, ArrowRight, FilterIcon, Quote, SearchIcon, ZapIcon, icons } from 'lucide-react';
import { InputRoot } from '@/components/shared/Input/InputRoot';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { Divider } from '@/components/shared/Divider';
import { Fragment } from 'react';
import { ButtonContrast } from '@/components/shared/ButtonContrast';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';

const JobsSearch = withTheme(({ theme, variant = 'default' }) => {
  const styles = {
    default: {
      logo: {
        [themes.DEFAULT]: 'logo_default',
        [themes.DARK]: 'logo_white',
        [themes.LIGHT]: 'logo_black',
      },
      background: {
        [themes.DEFAULT]: 'bg-primary-90',
        [themes.DARK]: 'bg-neutral-90',
        [themes.LIGHT]: 'bg-neutral-0',
      },
      text: {
        [themes.DEFAULT]: 'text-neutral-10',
        [themes.DARK]: 'text-neutral-10',
        [themes.LIGHT]: 'text-neutral-90',
      },
      middleText: {
        [themes.DEFAULT]: 'text-primary-40',
        [themes.DARK]: 'text-neutral-60',
        [themes.LIGHT]: 'text-neutral-90',
      },
      image: {
        [themes.DEFAULT]: 'grayscale-0',
        [themes.DARK]: 'grayscale',
        [themes.LIGHT]: 'grayscale',
      },
    },
  };

  const style = styles[variant];


  const repeatedDiv = (
    <div className='mt-3'>
      <p className='text-primary-90 text-base font-bold'>Fiap Ltda</p>
      <p className='text-neutral-100 text-sm font-normal'>UI Design</p>
      <p className='text-neutral-100 text-sm font-normal'>São Paulo - São Paulo</p>
      <p className='text-neutral-100 text-sm font-normal'>R$ 5.500/mês</p>
      <p className='text-neutral-100 text-sm font-normal'>Contrato: CLT</p>
      <ButtonLink className='text-sm'>mais detalhes</ButtonLink>
      <Divider/>
    </div>
  )
  
  const repeatedDivsArray = Array.from({ length: 4 }, (_, index) => (
    <Fragment key={index}>{repeatedDiv}</Fragment>
  ));

  return (
  <div className={twMerge(
      'w-screen h-screen flex bg-neutral-10'
    )}>
      <CandidateSideMenu/>
      <div className='flex flex-col mt-10 min-w-[90%] max-h-full p-5'>
        <Title className='text-2xl'>Vagas</Title>

        <div className='flex mt-3 ml-2 max-h-[85%] min-w-[80%] justify-center'>
          <Card className='flex-auto flex-col mr-10 w-32 p-8 '>
              <div className='flex'>
                <div className='flex flex-auto mr-2'>
                  <InputRoot> 
                    <SearchIcon/>
                    <InputField/>
                  </InputRoot>
                </div>
                  <FilterIcon/>
              </div>
              <p className='text-primary-90 text-xs font-bold mb-2'>Foram encontradas 10 vagas nessa categoria</p>
              <div className='overflow-auto max-h-[80%]'>
                {repeatedDivsArray.map((div, index) => (
                  <Fragment key={index}>{div}</Fragment>
                ))}
                <div className='flex mt-4 justify-center'>
                  <ArrowLeft className='text-primary-90'/>
                    <p className='text-primary-90 text-base font-bold mr-2 ml-2'>1/50</p>
                  <ArrowRight className='text-primary-90'/>
                </div>

             </div>
          </Card>
          <Card className='flex-auto w-64 max-h-fit p-8'>
                  <Title className='mb-5'>Informações da vaga</Title>
                  <div className='overflow-auto max-h-[80%]'>
                    <p className='text-primary-90 text-sm font-bold'>Fiap Ltda</p>
                    <p className='text-neutral-100 text-sm font-normal mt-3'>
                      <span className='font-bold'>Vaga:</span> UI Design 
                    </p>
                    <p className='text-neutral-100 text-sm font-normal mt-1'>
                      <span className='font-bold'>Contrato:</span> CLT 
                    </p>
                    <p className='text-neutral-100 text-sm font-normal mt-1'>
                      <span className='font-bold'>Localização:</span> São Paulo - São Paulo 
                    </p>
                    <p className='text-neutral-100 text-sm font-normal mt-1'>
                      <span className='font-bold'>Salário:</span> R$ 5.500/mês 
                    </p>
                    <p className='text-neutral-100 text-sm font-normal mt-1'>
                      <span className='font-bold'>Diferencial:</span> Curso Empodera 
                    </p>
                    <p className='text-neutral-100 text-sm font-normal mt-2 mb-4'>
                      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
                    </p>
                    <div className='max-w-[100%] flex justify-center'>
                      <ButtonPrimary>candidatar-se</ButtonPrimary>
                    </div>
                    
                  </div>
          </Card>
        </div>
      </div>
    </div>

  );
});

export default withTheme(JobsSearch);
