function saveWorkloadForm() {
    //Create object to represent the newly created assessment
    let workloadAssessment = {};

    //Get reference to form 
    let form = document.getElementById("workloadForm");

    //Retrieve each element in the form. Then assign the value
    //of the element to the assessment object created above.
    let buttonGroup = form.elements.namedItem("studyType");
    workloadAssessment.studyType = buttonGroup.value;

    let select = form.elements.namedItem("doseInterval");
    workloadAssessment.doseInterval = select.value;

    let checkbox = form.elements.namedItem("eventsHeight");
    workloadAssessment.eventsHeight = checkbox.checked;

    let textInput = form.elements.namedItem("cruDuration");
    workloadAssessment.cruDuration = textInput.value;

    localStorage.setItem("assessmentNumber1",JSON.stringify(workloadAssessment));

    window.location = "index.html";

    return false;
}

function updateAssementTable() {
    //Retrieve any existing assessments from local storage
    let storedValue = localStorage.getItem("assessmentNumber1");

    if (storedValue != null) {
        //Load the assessment table with assessment if it exists
        let table = document.getElementById("assessmentTable");

        let workloadAssessment = JSON.parse(storedValue);
        let newRow = table.insertRow(-1);
        let newCell = newRow.insertCell(-1);
        newCell.innerHTML = workloadAssessment.studyType;
        newCell = newRow.insertCell(-1);
        newCell.innerHTML = workloadAssessment.doseInterval;
        newCell = newRow.insertCell(-1);
        newCell.innerHTML = workloadAssessment.eventsHeight;
        newCell = newRow.insertCell(-1);
        newCell.innerHTML = workloadAssessment.cruDuration;
    }
}