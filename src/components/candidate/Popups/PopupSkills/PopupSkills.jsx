import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { InputLabel } from '@/components/shared/InputLabel';
import { SkillPill } from '@/components/shared/SkillPill/SkillPill';
import { withTheme, themes } from '@/contexts/ThemeContext';
import { useCreateOrUpdateUser } from '@/firebase/firestore/mutations';

const PopupSkills = withTheme(
  ({ className, skills, theme, variant = 'default', setIsOpen, user, ...props }) => {
    const [inputValue, setInputValue] = useState('');
    const [userSkills, setUserSkills] = useState(skills);

    const { mutate: createOrUpdateUser } = useCreateOrUpdateUser();

    const handleSave = async () => {
      const data = {
        id: user.id,
        skills: userSkills,
      };

      setIsOpen(false);
      createOrUpdateUser(data);
    };

    const handleAddItem = (value) => {
      if (value) setUserSkills([...userSkills, value]);
      setInputValue('');
    };

    const handleRemoveItem = (value) => {
      if (value) var i = userSkills.indexOf(value);
      userSkills.splice(i, 1);
      setUserSkills([...userSkills]);
    };

    const styles = {
      default: {
        text: {
          [themes.DEFAULT]: 'text-neutral-0',
          [themes.DARK]: 'text-neutral-0',
          [themes.LIGHT]: 'text-neutral-90',
        },
      },
    };

    const style = styles[variant];

    return (
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="w-full">
          <div className="w-full flex justify-between gap-2 items-end mb-2">
            <InputLabel
              placeholder="ex: Excel..."
              label="Digite uma habilidade:"
              className="w-full"
              variant="inverseSecundary"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <ButtonPrimary
              variant="inverse"
              onClick={() => handleAddItem(inputValue)}
              className="h-12"
            >
              adicionar
            </ButtonPrimary>
          </div>
          <p className={twMerge(style.text[theme], 'font-light')}>
            Digite uma skill e clique no botão para adicionar.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 self-start">
          {userSkills?.length > 0 ? (
            userSkills.map((s, i) => {
              return (
                <SkillPill
                  variant="inverse"
                  key={i}
                  text={s}
                  className="w-auto"
                  onDelete={() => handleRemoveItem(s)}
                />
              );
            })
          ) : (
            <></>
          )}
        </div>
        <ButtonPrimary variant="inverse" onClick={handleSave}>
          Salvar
        </ButtonPrimary>
      </div>
    );
  },
);

export { PopupSkills };
