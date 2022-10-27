async function newFormHandler(event) {
  event.preventDefault();

  const file = document.getElementById("imageFile");

    const formData = new FormData();
  if (file.files && file.files.length) {
    formData.append('postImage', file.files[0])
    try {
      const imgCheck = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
        // headers: {
        //   "Content-Type": "multipart/form-data; boundary=&"
        // }
      })
      // combine responses to do title url and image
    } 
    catch (error) {
      console.log(error);
    }
  }
  console.log(file.value);
  console.log(file.files);
  
  const title = document.querySelector('input[name="post-title"]').value;
  const post_url = document.querySelector('input[name="post-url"]').value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_url
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }


  }



document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
