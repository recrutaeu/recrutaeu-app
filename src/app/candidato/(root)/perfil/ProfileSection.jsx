import { ProfileQuotes } from './ProfileQuotes';
import { ButtonLabel } from '@/components/shared/ButtonLabel';
import { Title } from '@/components/shared/Title';
import { withTheme } from '@/contexts/ThemeContext';

const ProfileSection = withTheme(({ title, content, onAdd, onEdit }) => {
  return (
    <section className="mb-10 flex flex-col gap-5">
      <Title variant="bgTransform" className="text-base">
        {title}
      </Title>
      <ProfileQuotes items={content} onEdit={onEdit} />
      <ButtonLabel type="button" className="self-center" onClick={onAdd} variant="inverseQuarto">
        adicionar
      </ButtonLabel>
    </section>
  );
});

export { ProfileSection };
