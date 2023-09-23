import { ProfileQuotes } from './ProfileQuotes';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { Title } from '@/components/shared/Title';
import { withTheme } from '@/contexts/ThemeContext';

const ProfileSection = withTheme(({ title, content, onAdd }) => {
  return (
    <section className="mb-10 flex flex-col">
      <Title variant="inverse2" className="text-base">
        {title}
      </Title>
      <ProfileQuotes items={content} onEdit={onAdd} />
      <ButtonLink className="self-center" onClick={onAdd}>
        Adicionar
      </ButtonLink>
    </section>
  );
});

export { ProfileSection };
