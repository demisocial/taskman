document.getElementById('image-upload').addEventListener('change', function(event) {
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById('user-icon').src = e.target.result;
  }
  reader.readAsDataURL(file);
});

document.getElementById('profile-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var age = document.getElementById('age').value;
  var sex = document.getElementById('sex').value;
  var address = document.getElementById('address').value;
  var country = document.getElementById('country').value;
  var description = document.getElementById('description').value;

  // Save the profile details or perform any other desired actions
  console.log('Name:', name);
  console.log('Age:', age);
  console.log('Sex:', sex);
  console.log('Address:', address);
  console.log('Country:', country);
  console.log('Description:', description);

  // Clear the form fields
  document.getElementById('name').value = '';
  document.getElementById('age').value = '';
  document.getElementById('sex').value = 'male';
  document.getElementById('address').value = '';
  document.getElementById('country').value = '';
  document.getElementById('description').value = '';
});
