document.addEventListener("DOMContentLoaded", function() {
  
    function fetchApplicants() {
        fetch('https://localhost:4000/find/findApplicant')  
            .then(response => response.json())
            .then(data => {
                
                document.getElementById('applicantList').innerHTML = '';

               
                data.applicantArray.forEach(applicant => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${applicant.firstName} ${applicant.lastName} - ${applicant.email}`;
                    document.getElementById('applicantList').appendChild(listItem);
                });
            })
            .catch(error => console.error('Error fetching applicants:', error));
    }

  
    fetchApplicants();
});
