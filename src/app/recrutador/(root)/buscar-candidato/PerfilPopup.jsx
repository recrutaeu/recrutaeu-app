import { Poup } from '@/components/shared/Poup';

const PerfilPopup = ({ isOpen, setIsOpen }) => {
  return (
    <Poup
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Perfil do candidato"
      variant="inverseSecundary"
    >
      <div className="h-full overflow-hidden">
        <div className="h-full overflow-auto flex flex-col"></div>
      </div>
    </Poup>
  );
};

export default PerfilPopup;
