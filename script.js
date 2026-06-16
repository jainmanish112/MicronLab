// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Example function to populate data from CV (can be customized)
function populateFromCV(cvData) {
    // Populate researcher name
    if (cvData.name) {
        document.getElementById('researcher-name').textContent = cvData.name;
    }
    
    // Populate title
    if (cvData.title) {
        document.getElementById('researcher-title').textContent = cvData.title;
    }
    
    // Populate bio
    if (cvData.bio) {
        document.getElementById('bio-text').textContent = cvData.bio;
    }
    
    // Populate publications
    if (cvData.publications && cvData.publications.length > 0) {
        const publicationsList = document.getElementById('publications-list');
        publicationsList.innerHTML = '';
        cvData.publications.forEach(pub => {
            const pubItem = document.createElement('div');
            pubItem.className = 'publication-item';
            pubItem.innerHTML = `
                <h4>${pub.title}</h4>
                <p class="authors">${pub.authors}</p>
                <p class="journal">${pub.journal} (${pub.year})</p>
            `;
            publicationsList.appendChild(pubItem);
        });
    }
    
    // Populate education
    if (cvData.education && cvData.education.length > 0) {
        const educationList = document.getElementById('education-list');
        educationList.innerHTML = '';
        cvData.education.forEach(edu => {
            const eduItem = document.createElement('div');
            eduItem.className = 'education-item';
            eduItem.innerHTML = `
                <h4><span class="degree">${edu.degree}</span></h4>
                <p class="institution">${edu.institution}</p>
                <p class="year">${edu.year}</p>
            `;
            educationList.appendChild(eduItem);
        });
    }
    
    // Populate experience
    if (cvData.experience && cvData.experience.length > 0) {
        const experienceList = document.getElementById('experience-list');
        experienceList.innerHTML = '';
        cvData.experience.forEach(exp => {
            const expItem = document.createElement('div');
            expItem.className = 'experience-item';
            expItem.innerHTML = `
                <h4><span class="position">${exp.position}</span></h4>
                <p class="organization">${exp.organization}</p>
                <p class="period">${exp.period}</p>
            `;
            experienceList.appendChild(expItem);
        });
    }
    
    // Populate awards
    if (cvData.awards && cvData.awards.length > 0) {
        const awardsList = document.getElementById('awards-list');
        awardsList.innerHTML = '';
        cvData.awards.forEach(award => {
            const awardItem = document.createElement('div');
            awardItem.className = 'award-item';
            awardItem.innerHTML = `
                <h4>${award.title}</h4>
                <p class="year">${award.year}</p>
            `;
            awardsList.appendChild(awardItem);
        });
    }
    
    // Populate contact info
    if (cvData.contact) {
        if (cvData.contact.email) {
            document.getElementById('contact-email').textContent = cvData.contact.email;
        }
        if (cvData.contact.office) {
            document.getElementById('contact-office').textContent = cvData.contact.office;
        }
        if (cvData.contact.phone) {
            document.getElementById('contact-phone').textContent = cvData.contact.phone;
        }
    }
}

// Example CV data structure (replace with actual CV data)
const exampleCVData = {
    name: "Dr. [Your Name]",
    title: "Assistant Professor of Materials Science",
    bio: "Research interests in advanced materials characterization, nanomaterials synthesis, and computational materials science.",
    publications: [],
    education: [],
    experience: [],
    awards: [],
    contact: {
        email: "your.email@nmt.edu",
        office: "MSEC Building, Room XXX",
        phone: "(575) XXX-XXXX"
    }
};

// Uncomment the line below and update with actual CV data
// populateFromCV(exampleCVData);

