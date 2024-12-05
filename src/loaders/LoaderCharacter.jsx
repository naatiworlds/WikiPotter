export const loaderCharacter = async ({ params }) => {
  try {
    const response = await fetch(
      `https://potterapi-fedeperin.vercel.app/es/characters?search=${params.nickname}`
    );

    if (!response.ok) {
      throw new Error("Error al cargar el libro");
    }

    const character = await response.json();
    return { character: character[0] }; // Suponiendo que `character` es un array con un solo objeto
  } catch (error) {
    console.error(error);
    return { character: {} }; // Retorna un objeto vacío en caso de error
  }
};
