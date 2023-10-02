export async function getAllPostsData() {
  const res = await fetch('http://jsonapi.ac-uat.sitestudio.acquia.com/jsonapi/node/page/')
  const pages = await res.json()

  return pages.data
}
export async function getPostData(id) {
  const res = await fetch(`http://jsonapi.ac-uat.sitestudio.acquia.com/jsonapi/node/page/${id}/field_layout_canvas`)
  const pages = await res.json()

  return pages.data
}
export async function getAllPostIds() {
  const res = await fetch('http://jsonapi.ac-uat.sitestudio.acquia.com/jsonapi/node/page/')
  const pages = await res.json();

  return pages.data.map((node) => {
    return {
      params: {
        id: node.id,
      },
    };
  });
}

