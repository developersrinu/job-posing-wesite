


$(document).ready(function () {
    $('#companyBtn').click(function () {
        // Retrieve values from input fields
        var companyName = $('#companyName').val().trim(),
            companyEmail = $('#companyEmail').val().trim(),
            phoneNumber = $('#phoneNumber').val().trim(),
            companyAddress = $('#companyAddress').val().trim(),
            country = $('#country').val().trim(),
            state = $('#state').val().trim(),
            city = $('#city').val().trim(),
            zipCode = $('#zipCode').val().trim(),
            establishDate = $('#establishDate').val().trim(),
            category = $('#category').val().trim(),
            companyCategory = $('#companyCategory').val().trim(),
            companyDescription = $('#companyDescription').val().trim(),
            jobTitle = $('#jobTitleInput').val().trim(),
            jobCategory = $('#jobCategoryInput').val().trim(),
            jobType = $('input[name="jobType"]:checked').val(),
            locationType = $('input[name="locationType"]:checked').val(),
            experience = $('#experienceInput').val().trim(),
            vacancies = $('#vacanciesInput').val().trim(),
            jobDescription = $('#jobDescriptionTextarea').val().trim(),
            jobSchedule = $('input[name="shiftType"]:checked').val();
        
      
        if (companyName === '' || companyEmail === '' || phoneNumber === '' || companyAddress === '' || 
            country === '' || state === '' || city === '' || zipCode === '' || establishDate === '' || 
            category === '' || companyCategory === '' || companyDescription === '') {
          
            alert('Please fill out all required fields.');
            return; // Exit function to prevent further execution
        } else {
            alert('Post published successfully');

        }

        // Create company details object
        var companyDetails = {
            companyName: companyName,
            companyEmail: companyEmail,
            phoneNumber: phoneNumber,
            companyAddress: companyAddress,
            country: country,
            state: state,
            city: city,
            zipCode: zipCode,
            establishDate: establishDate,
            category: category,
            companyCategory: companyCategory,
            companyDescription: companyDescription,
            jobTitle: jobTitle,
            jobCategory: jobCategory,
            jobType: jobType,
            locationType: locationType,
            experience: experience,
            vacancies: vacancies,
            jobDescription: jobDescription,
            jobSchedule: jobSchedule
        };

        var companiesArray = JSON.parse(localStorage.getItem('companies')) || [];
        companiesArray.push(companyDetails);
        window.location.reload()

        localStorage.setItem('companies', JSON.stringify(companiesArray));

        // Clear input fields after submission
        $('.comp-input').val('');

        // Log updated array to console
        console.log(companiesArray);
    });

    $('#discardBtn').click(function () {
        $('.comp-input').val('');
    });

    $('#clearAllBtn').click(function () {
        $('.comp-input').val('');
    });

    const companiesArray = JSON.parse(localStorage.getItem('companies'));
    if (companiesArray) {
        for (let i = 0; i < companiesArray.length; i++) {
            $('#newPost').append(`<section class="hero-section">
                <!-- Navigation Chip -->
                <div class="chip max-chip1">
                    <!-- Company Details -->
                    <div class="company">
                        <div class="img">
                            <center>
                                <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
                                    <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
                                    <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z"/>
                                </svg>
                            </center>
                        </div>
                        <div class="info" onclick="">
                            <div style="color:blue">
                                <a href="#m2">
                                step 1 </a></div>
                            <div style="font-size:0.8rem; font-weight: 500;">company Details</div>
                        </div>
                    </div>

                    <div class="line company"></div>
                    <!-- Job Detail -->
                    <div class="company">
                        <div class="img">
                            <center>
                                <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" fill="white" class="bi bi-suitcase-lg-fill" viewBox="0 0 16 16">
                                    <path d="M7 0a2 2 0 0 0-2 2H1.5A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14H2a.5.5 0 0 0 1 0h10a.5.5 0 0 0 1 0h.5a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2H11a2 2 0 0 0-2-2zM6 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zM3 13V3h1v10zm9 0V3h1v10z"/>
                                </svg>
                            </center>

                        </div>
                        <div class="info" >
                            <a href="#m3">
                            <div style="color: blue;">step 2</div>
                        </a>
                            <div>job Detail</div>

                        </div>
                    </div>

                    <div class="line company"></div>
                    <!-- Review Job -->
                    <div class="company">
                        <div class="img">
                            <center>
                                <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" fill="currentColor" class="bi bi-list-columns-reverse" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 .5m4 0a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10A.5.5 0 0 1 4 .5m-4 2A.5.5 0 0 1 .5 2h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
                                </svg>
                            </center>
                        </div>
                        <div class="info" onclick="">
                            <a href="#m1">
                            <div style="color: blue;">step 3</div>
                        </a>
                            <div>Review job</div>

                        </div>
                    </div>
                </div>

                <!-- Hero Content -->
                <div class="hero" id="inputBody">
                    <!-- Header Image -->
                    <div class="header-img">
                        <img src="./Logo-Amazon.jpg" alt="" class="logo-head">
                        <img src="./images (1).jpeg" alt="" class="logo">
                    </div>
                    <!-- Job Title -->
                    <h2 class="heading">${companiesArray[i].jobTitle}</h2>
                    <!-- Job Link -->
                    <a href="https://www.amazon.jobs/en/" style="color: blue;" class="a">http//amazon/job/in</a>

                    <!-- Info Section -->
                    <div class="info2">

                        <div class="item1">
                            <div class="item-h">Department</div>
                            <div class="item-s">${companiesArray[i].jobCategory}</div>
                        </div>

                        <div class="item1">
                            <div class="item-h">Job role</div>
                            <div class="item-s">${companiesArray[i].jobTitle}</div>
                        </div>

                        <div class="item1">
                            <div class="item-h">work Type</div>
                            <div class="item-s">${companiesArray[i].locationType}</div>
                        </div>

                        <div class="item1">
                            <div class="item-h">vacancies</div>
                            <div class="item-s">${companiesArray[i].vacancies}</div>
                        </div>

                        <div class="item1">
                            <div class="item-h">job type</div>
                            <div class="item-s">${companiesArray[i].jobType}</div>
                        </div>

                    </div>

                    <!-- Job Description -->
                    <div class="job-b">
                        <h1 class="jb">job Description</h1>
                        <p class="p">
                            ${companiesArray[i].jobDescription}
                            We are seeking a talented Developer to join our dynamic team. As a 
                            Developer, you will be responsible for designing, implementing, and maintaining user-facing
                            features of our web applications.
                        </p>
                    </div>

                    <!-- Responsibilities List -->
                    <ul id="Responsibilities">
                        <h2>Responsibilities:</h2>
                        <li>Design, develop, and maintain user-facing features for web applications</li>
                        <li>Ensure web applications are responsive and optimized for various devices and screen sizes.</li>
                        <li>Optimize frontend code and assets for improved performance and faster load times.</li>
                        <li>Stay updated with the latest trends and technologies in frontend development.</li>
                    </ul>

                    <!-- Company Benefits -->
                    <div class="benfits">
                        <h2 id="Responsibilities">Company Benfits</h2>
                        <div class="lists">
                            <div class="list">gym stipend</div>
                            <div class="list">learning stipend</div>
                            <div class="list">cab specialty</div>
                            <div class="list">bonus allowance</div>
                            <div class="list">providing stocks</div>
                        </div>
                    </div>

                    <!-- Button Group -->
                    <div class="parent-btns">
                        <button class="footer-btn cc">Discard</button>
                        <button class="footer-btn pp postbtn-p">Post</button>
                    </div>
                </div>
            </section>`);
        }
    } else {
        console.log('No companies data found in local storage');
    }
});

    $('.cc').click(function(){
        alert('nothing to Discard ')
    })
   
    $('.pp').click(function(){
        alert('already posted')
    })


    $('#discardBtn').click(function () {
        $('.comp-input').val('');
    });


    $('#clearAllBtn').click(function () {
        $('.comp-input').val('');
    });

    $('#clearAllBtn1').click(function () {
        $('.comp-input').val('');
    });

