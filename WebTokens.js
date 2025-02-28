const TokenService = {
    generateToken: () => {
      const token = Math.random().toString(36).substr(2);
      localStorage.setItem("authToken", token);
      console.log("Generated Token:", token);
      return token;
    }
  };
  
  export default TokenService;
  