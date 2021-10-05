const PRODUCTS_GRAPHQL_FIELDS = `
    name,
    slug,
    thumbnail {
      url
      description
      title
      width
      height
    },
    summary,
    type
    desc {
      json
    }
`;

const SINGLE_PRODUCT_GRAPHQL_FIELDS = `
  name,
  slug,
  summary,
  thumbnail {
    url
    description
    title
    width
    height
  },
  overview,
  boxCollection(limit: 10) {
    items {
      title,
      description,
      url,
      width,
      height
    }
  }
  type,
  desc {
    json
  }
`;

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

function extractProduct(fetchResponse) {
  return fetchResponse?.data?.productCollection?.items?.[0];
}

function extractProductEntries(fetchResponse) {
  return fetchResponse?.data?.productCollection?.items;
}

export async function getPreviewProductBySlug(slug) {
  const entry = await fetchGraphQL(
    `query {
      productCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${PRODUCTS_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  );

  return extractProduct(entry);
}

export async function getAllProductWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      productCollection(where: { slug_exists: true }, order: date_DESC, limit: 10) {
        items {
          ${PRODUCTS_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractProductEntries(entries);
}
export async function getAllProductSlug() {
  const entries = await fetchGraphQL(
    `query {
      productCollection(where: { slug_exists: true }) {
        items {
          slug
        }
      }
    }`
  );
  return extractProductEntries(entries);
}

export async function getAllProductForHome(preview) {
  const entries = await fetchGraphQL(
    `query {
      productCollection(order: date_DESC, preview: ${
        preview ? "true" : "false"
      }, limit: 5) {
        items {
          ${PRODUCTS_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );

  return extractProductEntries(entries);
}

export async function getProductsByType(preview, type) {
  const entries = await fetchGraphQL(
    `query {
      productCollection(where: {type: "${type}"},order: date_DESC, preview: ${
      preview ? "true" : "false"
    }, limit: 10) {
        items {
          ${PRODUCTS_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );

  return extractProductEntries(entries);
}

export async function getProductAndRelated(slug, preview) {
  const entry = await fetchGraphQL(
    `query {
      productCollection(where: { slug: "${slug}" }, preview: ${
      preview ? "true" : "false"
    }, limit: 1) {
        items {
          ${SINGLE_PRODUCT_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );

  const entries = await fetchGraphQL(
    `query {
      productCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
      preview ? "true" : "false"
    }, limit: 3) {
        items {
          ${PRODUCTS_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );

  return {
    product: extractProduct(entry),
    relatedProduct: extractProductEntries(entries),
  };
}
