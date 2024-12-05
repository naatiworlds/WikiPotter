export const LoaderCharacters = async () => {
    try {
      const response = await fetch(
        "https://potterapi-fedeperin.vercel.app/es/characters"
      );
  
      if (!response.ok) {
        throw new Error("Error al cargar los personajes");
      }
  
      const characters = await response.json();
      return { characters };
    } catch (error) {
      console.error(error);
      return { characters: [] }; // Retorna un array vacío en caso de error
    }
  };