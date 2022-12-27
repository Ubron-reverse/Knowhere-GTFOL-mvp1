
let job1Active = true
let job2Active = false
let job3Active = false

let proposalEl1 = document.getElementById("proposal-el-1")
let proposalEl2 = document.getElementById("proposal-el-2")
let proposalEl3 = document.getElementById("proposal-el-3")

let instruct = document.getElementById("instruct")

//-------------Client Window-----------//

let job1 = document.getElementById("job-1")
let job2 = document.getElementById("job-2")
let job3 = document.getElementById("job-3")
function showJob1() {
    job1.style.display = 'block'
    job2.style.display = 'none'
    job3.style.display = 'none'

    job1Active = true
    job2Active = false
    job3Active = false

    proposalEl1.style.display = 'none'
    proposalEl2.style.display = 'none'
    proposalEl3.style.display = 'none'

}
function showJob2() {
    job1.style.display = 'none'
    job2.style.display = 'block'
    job3.style.display = 'none'

    job1Active = false
    job2Active = true
    job3Active = false

    proposalEl1.style.display = 'none'
    proposalEl2.style.display = 'none'
    proposalEl3.style.display = 'none'
}
function showJob3() {
    job1.style.display = 'none'
    job2.style.display = 'none'
    job3.style.display = 'block'

    job1Active = false
    job2Active = false
    job3Active = true

    proposalEl1.style.display = 'none'
    proposalEl2.style.display = 'none'
    proposalEl3.style.display = 'none'
}

//-------Freelancer's Window--------//



function generateProposal() {
    instruct.style.display = "none"

    if(job1Active) {
        proposalEl1.style.display = "block"
        proposalEl2.style.display = "none"
        proposalEl3.style.display = "none"
    } else if (job2Active) {
        proposalEl1.style.display = "none"
        proposalEl2.style.display = "block"
        proposalEl3.style.display = "none"
    } else {
        proposalEl1.style.display = "none"
        proposalEl2.style.display = "none"
        proposalEl3.style.display = "block"
    }
    
}