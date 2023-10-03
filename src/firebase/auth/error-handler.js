export function errorHandler(error) {
  switch (error) {
    case 'auth/invalid-email':
      return 'Email inválido. Verifique o email inserido.';
    case 'auth/missing-password':
      return 'Insira a senha.';
    case 'auth/invalid-login-credentials':
      return 'Email ou senha incorreto. Verifique e tente novamente.';
    case 'auth/admin-restricted-operation':
      return 'Verifique os dados inseridos para realizar o cadastro.';
    case 'auth/email-already-in-use':
      return 'Não foi possivel fazer o cadastro do usuário.';
    case 'auth/invalid-login-credentials':
      return 'Email e/ou senha incorreto/s. Verifique e tente novamente.';
    default:
      return error;
  }
}
