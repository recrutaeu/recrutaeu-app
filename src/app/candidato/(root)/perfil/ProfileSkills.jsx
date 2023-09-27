import { twMerge } from 'tailwind-merge';
import { ButtonLabel } from '@/components/shared/ButtonLabel';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { SkillPill } from '@/components/shared/SkillPill/SkillPill';
import { Title } from '@/components/shared/Title';
import { themes, withTheme } from '@/contexts/ThemeContext';

const ProfileSkills = withTheme(({ title, skills, onAdd, theme, variant = 'default' }) => {
  const styles = {
    default: {
      text: {
        [themes.DEFAULT]: 'text-neutral-90',
        [themes.DARK]: 'text-neutral-90 md:text-neutral-0',
        [themes.LIGHT]: 'text-neutral-0 md:text-neutral-90',
      },
      icon: {
        [themes.DEFAULT]: 'text-primary-90',
        [themes.DARK]: 'text-neutral-90 md:text-neutral-0',
        [themes.LIGHT]: 'text-neutral-0 md:text-neutral-90',
      },
    },
  };

  const style = styles[variant];

  return (
    <section className="mb-10 flex flex-col gap-5">
      <Title variant="bgTransform" className="text-base">
        {title}
      </Title>
      <div className="flex flex-wrap gap-2">
        {skills.length > 0 ? (
          skills.map((s, i) => {
            return <SkillPill key={i} text={s} className="w-auto" />;
          })
        ) : (
          <p className={twMerge('text-sm mb-3 mt-1', style.text[theme])}>
            Nenhuma habilidade cadastrada.
          </p>
        )}
      </div>
      <ButtonLabel variant="inverseQuarto" className="self-center" onClick={onAdd}>
        {skills?.length > 0 ? 'Editar' : 'Adicionar'}
      </ButtonLabel>
    </section>
  );
});

export { ProfileSkills };
