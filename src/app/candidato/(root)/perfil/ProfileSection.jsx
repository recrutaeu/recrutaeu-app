import { ProfileQuotes } from './ProfileQuotes';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { Title } from '@/components/shared/Title';
import { withTheme } from '@/contexts/ThemeContext';

const ProfileSection = withTheme(({ title, content, onAdd, onEdit }) => {
  return (
    <section className="mb-10 flex flex-col gap-5">
      <Title variant="bgTransform" className="text-base">
        {title}
      </Title>
      <ProfileQuotes items={content} onEdit={onEdit} />
      <ButtonLink variant="bgTransform" className="self-center" onClick={onAdd}>
        Adicionar
      </ButtonLink>
    </section>
  );
});

export { ProfileSection };
