async function newFormHandler(event) {
  event.preventDefault();

  const file = document.getElementById("imageFile");

  const formData = new FormData();
  if (file.files && file.files.length) {
    formData.append('postImage', file.files[0])
    console.log(formData);
    try {
      const imgCheck = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
        // headers: {
        //   "Content-Type": "multipart/form-data; boundary=&"
        // }
      })
      const data = await imgCheck.json();
      console.log("data", data);
      const title = document.querySelector('input[name="post-title"]').value;
      const post_url = document.querySelector('input[name="post-url"]').value;
      const text = document.querySelector('textarea[name="text"]').value;

      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
          title,
          post_url,
          text,
          ...data
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const postData = await response.json();
      console.log(postData);

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
    catch (error) {
      console.log(error);
    }
  }
  console.log(file.value);
  console.log(file.files);


}



document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
