// Global Array for Candidates
let candidates = [];


// Candidates Constructor Objects
function Candidate(id, name, surname, age, position, experience, education, status, note){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.position = position;
    this.experience = experience;
    this.education = education;
    this.status = status;
    this.note = note;
}



// Create Candidate
function createCandidate(){
    let candidateId = document.getElementById('candidateId').value;
    let candidateName = document.getElementById('candidateName').value;
    let candidateSurname = document.getElementById('candidateSurname').value;
    let candidateAge = document.getElementById('candidateAge').value;
    let candidatePosition = document.getElementById('candidatePosition').value;
    let candidateYofExperience = document.getElementById('candidateYofExperience').value;
    let candidateEducation = document.getElementById('candidateEducation').value;
    let candidateStatus = document.getElementById('candidateStatus').value;
    let candidateNote = document.getElementById('candidateNote').value;


    let candidateExists = checkIfCandidateExists(candidateId); // Check if we have candidate with same ID
    if(candidateExists){
        let notify = document.getElementById('notification'); // Notification if we have candidate with same ID
        notify.classList.add('notify');
        notify.innerHTML = 'Student by ID already exists';
    }else{
        let newCandidate = new Candidate(candidateId, candidateName, candidateSurname, candidateAge, candidatePosition, candidateYofExperience, candidateEducation, candidateStatus, candidateNote) // New Candidate Object
        candidates.push(newCandidate); // Adding the new candidate into candidates Array
    

        // Creating Table and Display DATA
        let tableBody = document.getElementsByTagName('tbody')[0];
        let tr = document.createElement('tr');
        let ShowID = document.createElement('td');
        let ShowName = document.createElement('td');
        let ShowSurname = document.createElement('td');
        let ShowAge = document.createElement('td');
        let ShowPosition = document.createElement('td');
        let ShowYofExperience = document.createElement('td');
        let ShowEducation = document.createElement('td');
        let ShowStatus = document.createElement('td');
        let ShowNote = document.createElement('td');

        // Delete Button For Each Row
        let btnDelete = document.createElement('button');
        btnDelete.classList.add('btnDelete');
        btnDelete.innerHTML = 'Remove'
        btnDelete.onclick = function(e){
            const tr = e.target.parentElement;
            tr.style.display = 'none';
            for(let j = 0; j < candidates.length; j++){
                if(candidateId == candidates[j].id){
                    candidates.splice(j);
                    ShowID.innerText = '';
                    ShowName.innerText = '';
                    ShowSurname.innerText = '';
                    ShowAge.innerText = '';
                    ShowPosition.innerText = '';
                    ShowYofExperience.innerText = '';
                    ShowEducation.innerText = '';
                    ShowStatus.innerText = '';
                    ShowNote.innerText = '';
                    btnDelete.style.display = 'none';
                }
            }

        }

        // Preview Button
        let btnPreview = document.createElement('button');
        btnPreview.id = 'btnPreview';
        btnPreview.classList.add('btnPreview');
        btnPreview.innerHTML = 'View Record'
        // When the user clicks the button, open the modal 
        let PreviewId = document.getElementById('PreviewcandidateId');
        let PreviewName = document.getElementById('PreviewcandidateName');
        let PreviewSurname = document.getElementById('PreviewcandidateSurname');
        let PreviewAge = document.getElementById('PreviewcandidateAge');
        let PreviewPosition = document.getElementById('PreviewcandidatePosition');
        let PreviewExperience = document.getElementById('PreviewcandidateExperience');
        let PreviewEducation = document.getElementById('PreviewcandidateEducation');
        let PreviewStatus = document.getElementById('PreviewcandidateStatus');
        let PreviewNote = document.getElementById('PreviewcandidateNote');
        btnPreview.onclick = function() {
            clearForm();
            let modalPreview = document.getElementById("previewCandidate");
            modalPreview.style.display = "block";
            for(let i = 0; i < candidates.length; i++){
                let currentCandidate = candidates[i];
                ValuePreviewID = currentCandidate.id;
                ValuePreviewName = currentCandidate.name;
                ValuePreviewSurname = currentCandidate.surname;
                ValuePreviewAge = currentCandidate.age;
                ValuePreviewPosition = currentCandidate.position;
                ValuePreviewYofExperience = currentCandidate.experience;
                ValuePreviewEducation = currentCandidate.education;
                ValuePreviewStatus = currentCandidate.status;
                ValuePreviewNote = currentCandidate.note;
            }
            PreviewId.value = ValuePreviewID
            PreviewName.value = ValuePreviewName;
            PreviewSurname.value = ValuePreviewSurname;
            PreviewAge.value = ValuePreviewAge;
            PreviewPosition.value = ValuePreviewPosition;
            PreviewExperience.value = ValuePreviewYofExperience;
            PreviewEducation.value = ValuePreviewEducation;
            PreviewStatus.value = ValuePreviewStatus;
            PreviewNote.value = ValuePreviewNote;
          }
        // Get Data from Object
        for(let i = 0; i < candidates.length; i++){
            let currentCandidate = candidates[i];
            ShowID.innerText = currentCandidate.id;
            ShowName.innerText = currentCandidate.name;
            ShowSurname.innerText = currentCandidate.surname;
            ShowAge.innerText = currentCandidate.age;
            ShowPosition.innerText = currentCandidate.position;
            ShowYofExperience.innerText = currentCandidate.experience;
            ShowEducation.innerText = currentCandidate.education;
            ShowStatus.innerText = currentCandidate.status;
            ShowNote.innerText = currentCandidate.note;
        }
        // Edit Button 
        let InsertEditId = document.getElementById('EditcandidateId');
        let InsertEditName = document.getElementById('EditcandidateName');
        let InsertEditSurname = document.getElementById('EditcandidateSurname');
        let InsertEditAge = document.getElementById('EditcandidateAge');
        let InsertEditPosition = document.getElementById('EditcandidatePosition');
        let InsertEditExperience = document.getElementById('EditcandidateExperience');
        let InsertEditEducation = document.getElementById('EditcandidateEducation');
        let InsertEditStatus = document.getElementById('EditcandidateStatus');
        let InsertEditNote = document.getElementById('EditcandidateNote');
        let ShowEdit = document.createElement('button');
        ShowEdit.classList.add('btnEdit');
        ShowEdit.textContent = 'Edit';
        ShowEdit.id = 'btnEdit';
        ShowEdit.onclick = function(){
            let modalEdit= document.getElementById("EditCandidate");
            modalEdit.style.display = "block";
            for(let i = 0; i < candidates.length; i++){
                let currentCandidate = candidates[i];
                ValueEditID = currentCandidate.id;
                ValueEditName = currentCandidate.name;
                ValueEditSurname = currentCandidate.surname;
                ValueEditAge = currentCandidate.age;
                ValueEditPosition = currentCandidate.position;
                ValueEditYofExperience = currentCandidate.experience;
                ValueEditEducation = currentCandidate.education;
                ValueEditStatus = currentCandidate.status;
                ValueEditNote = currentCandidate.note;
            }
            InsertEditId.value = ValueEditID;
            InsertEditName.value = ValueEditName;
            InsertEditSurname.value = ValueEditSurname;
            InsertEditAge.value = ValueEditAge;
            InsertEditPosition.value = ValueEditPosition;
            InsertEditExperience.value = ValueEditYofExperience;
            InsertEditEducation.value = ValueEditEducation;
            InsertEditStatus.value = ValueEditStatus;
            InsertEditNote.value = ValueEditNote;



        }

        // End of Edit Btn

        tr.appendChild(ShowEdit);
        tr.appendChild(ShowID);
        tr.appendChild(btnPreview);
        tr.appendChild(ShowName);
        tr.appendChild(ShowSurname);
        tr.appendChild(ShowAge);
        tr.appendChild(ShowPosition);
        tr.appendChild(ShowYofExperience);
        tr.appendChild(ShowEducation);
        tr.appendChild(ShowStatus);
        tr.appendChild(ShowNote);
        tr.appendChild(btnDelete);
        tableBody.appendChild(tr);
        let divShow = document.getElementById('content');
        divShow.style.display = 'block'; // display table
        clearForm(); // Clear Form Inputs
    }

}

// Submit FORM + Validation Inputs
let btnSubmit = document.getElementById('btnSubmit');
btnSubmit.onclick = function(){
    inputValidation();
}

// Close Button - Create Form
let btnClose = document.getElementById('btnClose');
btnClose.onclick = function(){
    modal.style.display = "none";
}

// Close Button -  View Form
let btnCloseView = document.getElementById('btnCloseView');
btnCloseView.onclick = function(){
    let modalPreview = document.getElementById('previewCandidate');
    modalPreview.style.display = "none";
}


// Close View Form - on X
let btnCloseViewX = document.getElementsByClassName('close2')[0];
btnCloseViewX.onclick = function(){
    let modalPreview = document.getElementById('previewCandidate');
    modalPreview.style.display = "none";
}

// Close Edit Form - on X
let btnCloseEditX = document.getElementsByClassName('close3')[0];
btnCloseEditX.onclick = function (){
    let modalEdit= document.getElementById("EditCandidate");
    modalEdit.style.display = "none";
}

// Edit - Save Button Submit 
let btnEditCandidate = document.getElementById('btnEditCandidate');
btnEditCandidate.onclick = function(){
    // Hide Edit Form
    let modalEdit= document.getElementById("EditCandidate");
    modalEdit.style.display = "none";
    // Do the Code
    let InsertEditId = document.getElementById('EditcandidateId');
    let InsertEditName = document.getElementById('EditcandidateName');
    let InsertEditSurname = document.getElementById('EditcandidateSurname');
    let InsertEditAge = document.getElementById('EditcandidateAge');
    let InsertEditPosition = document.getElementById('EditcandidatePosition');
    let InsertEditExperience = document.getElementById('EditcandidateExperience');
    let InsertEditEducation = document.getElementById('EditcandidateEducation');
    let InsertEditStatus = document.getElementById('EditcandidateStatus');
    let InsertEditNote = document.getElementById('EditcandidateNote');

    candidates.some(candidate => candidate.id = InsertEditId.value);
    candidates.some(candidate => candidate.name = InsertEditName.value);
    candidates.some(candidate => candidate.surname = InsertEditSurname.value); 
    candidates.some(candidate => candidate.age = InsertEditAge.value); 
    candidates.some(candidate => candidate.position = InsertEditPosition.value); 
    candidates.some(candidate => candidate.experience = InsertEditExperience.value);  
    candidates.some(candidate => candidate.education = InsertEditEducation.value);
    candidates.some(candidate => candidate.status = InsertEditStatus.value);
    candidates.some(candidate => candidate.note = InsertEditNote.value);


    // Creating Table and Display DATA
    let tableBody = document.getElementsByTagName('tbody')[0];
    let tr = document.createElement('tr');
    let ShowID = document.createElement('td');
    let ShowName = document.createElement('td');
    let ShowSurname = document.createElement('td');
    let ShowAge = document.createElement('td');
    let ShowPosition = document.createElement('td');
    let ShowYofExperience = document.createElement('td');
    let ShowEducation = document.createElement('td');
    let ShowStatus = document.createElement('td');
    let ShowNote = document.createElement('td');


    ShowID.innerText = InsertEditId.value;
    ShowName.innerText = InsertEditName.value;
    ShowSurname.innerText = InsertEditSurname.value;
    ShowAge.innerText = InsertEditAge.value;
    ShowPosition.innerText = InsertEditPosition.value;
    ShowYofExperience.innerText = InsertEditExperience.value;
    ShowEducation.innerText = InsertEditEducation.value;
    ShowStatus.innerText = InsertEditStatus.value;
    ShowNote.innerText = InsertEditNote.value;
    // Preview Delete //
    // Delete Button For Each Row
    let btnDelete = document.createElement('button');
    btnDelete.classList.add('btnDelete');
    btnDelete.innerHTML = 'Remove'
    btnDelete.onclick = function(e){
        const tr = e.target.parentElement;
        tr.style.display = 'none';
        for(let j = 0; j < candidates.length; j++){
            if(candidateId == candidates[j].id){
                candidates.splice(j);
                ShowID.innerText = '';
                ShowName.innerText = '';
                ShowSurname.innerText = '';
                ShowAge.innerText = '';
                ShowPosition.innerText = '';
                ShowYofExperience.innerText = '';
                ShowEducation.innerText = '';
                ShowStatus.innerText = '';
                ShowNote.innerText = '';
                btnDelete.style.display = 'none';
            }
        }

    }

    // Preview Button
    let btnPreview = document.createElement('button');
    btnPreview.id = 'btnPreview';
    btnPreview.classList.add('btnPreview');
    btnPreview.innerHTML = 'View Record'
    // When the user clicks the button, open the modal 
    let PreviewId = document.getElementById('PreviewcandidateId');
    let PreviewName = document.getElementById('PreviewcandidateName');
    let PreviewSurname = document.getElementById('PreviewcandidateSurname');
    let PreviewAge = document.getElementById('PreviewcandidateAge');
    let PreviewPosition = document.getElementById('PreviewcandidatePosition');
    let PreviewExperience = document.getElementById('PreviewcandidateExperience');
    let PreviewEducation = document.getElementById('PreviewcandidateEducation');
    let PreviewStatus = document.getElementById('PreviewcandidateStatus');
    let PreviewNote = document.getElementById('PreviewcandidateNote');
    btnPreview.onclick = function() {
        clearForm();
        let modalPreview = document.getElementById("previewCandidate");
        modalPreview.style.display = "block";
        for(let i = 0; i < candidates.length; i++){
            let currentCandidate = candidates[i];
            ValuePreviewID = currentCandidate.id;
            ValuePreviewName = currentCandidate.name;
            ValuePreviewSurname = currentCandidate.surname;
            ValuePreviewAge = currentCandidate.age;
            ValuePreviewPosition = currentCandidate.position;
            ValuePreviewYofExperience = currentCandidate.experience;
            ValuePreviewEducation = currentCandidate.education;
            ValuePreviewStatus = currentCandidate.status;
            ValuePreviewNote = currentCandidate.note;
        }
        PreviewId.value = ValuePreviewID
        PreviewName.value = ValuePreviewName;
        PreviewSurname.value = ValuePreviewSurname;
        PreviewAge.value = ValuePreviewAge;
        PreviewPosition.value = ValuePreviewPosition;
        PreviewExperience.value = ValuePreviewYofExperience;
        PreviewEducation.value = ValuePreviewEducation;
        PreviewStatus.value = ValuePreviewStatus;
        PreviewNote.value = ValuePreviewNote;
        }
    // Edit Button 
    InsertEditId = document.getElementById('EditcandidateId');
    InsertEditName = document.getElementById('EditcandidateName');
    InsertEditSurname = document.getElementById('EditcandidateSurname');
    InsertEditAge = document.getElementById('EditcandidateAge');
    InsertEditPosition = document.getElementById('EditcandidatePosition');
    InsertEditExperience = document.getElementById('EditcandidateExperience');
    InsertEditEducation = document.getElementById('EditcandidateEducation');
    InsertEditStatus = document.getElementById('EditcandidateStatus');
    InsertEditNote = document.getElementById('EditcandidateNote');
    ShowEdit = document.createElement('button');
    ShowEdit.classList.add('btnEdit');
    ShowEdit.textContent = 'Edit';
    ShowEdit.id = 'btnEdit';
    ShowEdit.onclick = function(){
        let modalEdit= document.getElementById("EditCandidate");
        modalEdit.style.display = "block";
        for(let i = 0; i < candidates.length; i++){
            let currentCandidate = candidates[i];
            ValueEditID = currentCandidate.id;
            ValueEditName = currentCandidate.name;
            ValueEditSurname = currentCandidate.surname;
            ValueEditAge = currentCandidate.age;
            ValueEditPosition = currentCandidate.position;
            ValueEditYofExperience = currentCandidate.experience;
            ValueEditEducation = currentCandidate.education;
            ValueEditStatus = currentCandidate.status;
            ValueEditNote = currentCandidate.note;
        }
        InsertEditId.value = ValueEditID;
        InsertEditName.value = ValueEditName;
        InsertEditSurname.value = ValueEditSurname;
        InsertEditAge.value = ValueEditAge;
        InsertEditPosition.value = ValueEditPosition;
        InsertEditExperience.value = ValueEditYofExperience;
        InsertEditEducation.value = ValueEditEducation;
        InsertEditStatus.value = ValueEditStatus;
        InsertEditNote.value = ValueEditNote;



    }
    
    // Display Data
    tr.appendChild(ShowEdit);
    tr.appendChild(ShowID);
    tr.appendChild(btnPreview);
    tr.appendChild(ShowName);
    tr.appendChild(ShowSurname);
    tr.appendChild(ShowAge);
    tr.appendChild(ShowPosition);
    tr.appendChild(ShowYofExperience);
    tr.appendChild(ShowEducation);
    tr.appendChild(ShowStatus);
    tr.appendChild(ShowNote);
    tr.appendChild(btnDelete);
    tableBody.appendChild(tr);
    let divShow = document.getElementById('content');
    divShow.style.display = 'block'; // display table
    clearForm(); // Clear Form Inputs



}

// Close Button - Edit Form 
let btnCloseEdit = document.getElementsByClassName('btnCloseCandidate')[0];
btnCloseEdit.onclick = function (){
    let modalEdit= document.getElementById("EditCandidate");
    modalEdit.style.display = "none";
}

// Candidate ID exists or NOT
function checkIfCandidateExists(candidateId){
    return candidates.some(candidate => candidate.id === candidateId);
}

// Clear Form
function clearForm(){
    let formInputs = document.getElementsByClassName('formControl');
    for(let i = 0; i < formInputs.length; i++){
        formInputs[i].value = '';
    }
}


// Input Validation
function inputValidation(){
    let divShow = document.getElementById('content');
    let candidateId = document.getElementById('candidateId').value;
    let candidateName = document.getElementById('candidateName').value;
    let candidateSurname = document.getElementById('candidateSurname').value;
    let candidateAge = document.getElementById('candidateAge').value;
    let candidatePosition = document.getElementById('candidatePosition').value;
    let candidateYofExperience = document.getElementById('candidateYofExperience').value;
    let candidateEducation = document.getElementById('candidateEducation').value;
    let candidateStatus = document.getElementById('candidateStatus').value;
        if(candidateId,candidateName,candidateSurname,candidateAge,candidatePosition,candidateYofExperience,candidateEducation,candidateStatus != ''){
            if (divShow.style.display === 'none'){
                divShow.style.display = 'block';
            }
            modal.style.display = "none";
            createCandidate();
        }else{
            let notify = document.getElementById('notification'); // Notification if fields are
            notify.classList.add('notify');
            notify.innerHTML = 'Input fields are empty!';
        }
}