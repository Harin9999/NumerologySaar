export const generateMetaTags = (
  title: string,
  description: string,
  path: string = '/'
) => {
  const baseUrl = 'https://numerologysaar.com';
  const fullUrl = `${baseUrl}${path}`;
  const imageUrl = `${baseUrl}/og-image.jpg`;

  return {
    title: `${title} | Numerology Saar`,
    meta: [
      {
        name: 'description',
        content: description
      },
      {
        property: 'og:title',
        content: title
      },
      {
        property: 'og:description',
        content: description
      },
      {
        property: 'og:url',
        content: fullUrl
      },
      {
        property: 'og:image',
        content: imageUrl
      },
      {
        name: 'twitter:title',
        content: title
      },
      {
        name: 'twitter:description',
        content: description
      },
      {
        name: 'twitter:image',
        content: imageUrl
      }
    ]
  };
};