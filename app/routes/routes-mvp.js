//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()



// Add your routes here



// version 6 routing

// start page to first question
router.post('/mvp/start', function (req, res) {

    res.redirect('/mvp/questions/question-one')
  
  })

  // question 1 radio options routing - incomplete
router.post('/mvp/questions/question-one', function(request, response) {

    var questionOne = request.session.data['whatDoYouNeed']
    if (questionOne == "register"){
        response.redirect("/mvp/questions/register-question")
    } else if (questionOne == "filing"){
            response.redirect("/mvp/questions/filing-question")
    } else if (questionOne == "maintaining"){
        response.redirect("/mvp/questions/maintain-question")
    }
    else if (questionOne == "closingAndRestoring"){
        response.redirect("/mvp/questions/close-company-question")
    }
    else if (questionOne == "penalties"){
        response.redirect("/mvp/questions/penalties-question")
    }
    else if (questionOne == "tech"){
        response.redirect("/mvp/questions/technical-help-question")
    }
    else if (questionOne == "report"){
        response.redirect("/mvp/questions/company-complaint-question")
    } else if (questionOne == "somethingElse"){
        response.redirect("/mvp/outcomes/outcome-something-else")
    }
    else {
        response.redirect("/mvp/outcomes/generic-outcome")
    }
})


// registering filter question radio routing 

router.post('/mvp/questions/register-question', function(request, response) {

    var registerQuestion = request.session.data['registerFilter']
    if (registerQuestion == "registeringCompany"){
        response.redirect("/mvp/outcomes/register-outcome")
    } else if (registerQuestion == "authCode1"){
            response.redirect("/mvp/outcomes/outcome-auth-code")
    }
     else {
        response.redirect("/mvp/outcomes/outcome-something-else")
    }
})

// filing filter question radio routing - incomplete

router.post('/mvp/questions/filing-question', function(request, response) {

    var filingQuestion = request.session.data['filingFilter']
    if (filingQuestion == "confirmationStatement"){
        response.redirect("/mvp/outcomes/outcome-conf-stat")
    } else if (filingQuestion == "filingAccounts"){
            response.redirect("/mvp/outcomes/outcome-accounts")
    } else if (filingQuestion == "trackFiling"){
        response.redirect("/mvp/outcomes/outcome-track-filing")
    } else if (filingQuestion == "requestingTime"){
        response.redirect("/mvp/outcomes/outcome-filing-extension")
    } else if (filingQuestion == "somethingElse"){
        response.redirect("/mvp/outcomes/outcome-something-else")
    } 
     else {
        response.redirect("/mvp/outcomes/generic-outcome")
    }
})



// maintain filter question radio routing 

router.post('/mvp/questions/maintain-question', function(request, response) {

    var maintainQuestion = request.session.data['maintainFilter']
    if (maintainQuestion == "registeredEmailAddress"){
        response.redirect("/mvp/outcomes/outcome-email-address")
    } else if (maintainQuestion == "registeredOfficeAddress"){
            response.redirect("/mvp/outcomes/outcome-office-address")
    } else if (maintainQuestion == "directors"){
        response.redirect("/mvp/outcomes/outcome-directors")
    } else if (maintainQuestion == "secretaries"){
        response.redirect("/mvp/outcomes/outcome-secretaries")
    } 
    else if (maintainQuestion == "personsSignificantControl"){
        response.redirect("/mvp/outcomes/outcome-PSCs")
    } 
    else if (maintainQuestion == "shareCapital"){
        response.redirect("/mvp/outcomes/outcome-shares")
    } else if (maintainQuestion == "companyName"){
        response.redirect("/mvp/outcomes/outcome-company-name")
    } 
    else if (maintainQuestion == "trackFiling2"){
        response.redirect("/mvp/outcomes/outcome-track-filing")
    }  else if (maintainQuestion == "somethingElse"){
        response.redirect("/mvp/outcomes/outcome-something-else")
    } 
     else {
        response.redirect("/mvp/outcomes/generic-outcome")
    }
})


// filing update or change sub question routing

// router.post('/mvp/filing-sub-question', function(request, response) {

//     var updateQuestion = request.session.data['updateFilter']
//     if (updateQuestion == "directorUpdate"){
//         response.redirect("/mvp/generic-outcome")
//     } else if (updateQuestion == "pscChanges"){
//             response.redirect("/mvp/generic-outcome")
//     } else if (updateQuestion == "fileShares"){
//         response.redirect("/mvp/outcome-shares")
//     } else if (updateQuestion == "somethingElse"){
//         response.redirect("/mvp/outcome-something-else")
//     } 
//      else {
//         response.redirect("/mvp/generic-outcome")
//     }
// })


// closing filter question radio routing 

router.post('/mvp/questions/close-company-question', function(request, response) {

    var closingQuestion = request.session.data['closingFilter']
    if (closingQuestion == "closingCompany"){
        response.redirect("/mvp/outcomes/outcome-closing")
    } else if (closingQuestion == "restoring"){
        response.redirect("/mvp/outcomes/outcome-restoring")
    } else if (closingQuestion == "objecting"){
        response.redirect("/mvp/outcomes/outcome-objecting-strike-off")
    }
     else {
        response.redirect("/mvp/outcomes/outcome-something-else")
    }
})





// penalties filter question radio routing - incomplete

router.post('/mvp/questions/penalties-question', function(request, response) {

    var penaltiesQuestion = request.session.data['penaltiesFilter']
    if (penaltiesQuestion == "appealingPenalty"){
        response.redirect("/mvp/outcomes/outcome-appeal")
    } else if (penaltiesQuestion == "payingPenalty"){
        response.redirect("/mvp/outcomes/outcome-paying")
    } else if (penaltiesQuestion == "moreTime"){
        response.redirect("/mvp/outcomes/outcome-filing-extension")
    } else if (penaltiesQuestion == "penaltiesSomethingElse"){
            response.redirect("/mvp/outcomes/outcome-something-else")
    } else {
        response.redirect("/mvp/outcomes/generic-outcome")
    }
})


// technical help filter question radio routing - incomplete

router.post('/mvp/questions/technical-help-question', function(request, response) {

    var techQuestion = request.session.data['techFilter']
    if (techQuestion == "authCodeProblem"){
        response.redirect("/mvp/outcomes/outcome-auth-code")
    } else if (techQuestion == "SignIn"){
            response.redirect("/mvp/outcomes/outcome-sign-in")
    } else {
        response.redirect("/mvp/outcomes/outcome-something-else")
    }
})



// report filter question radio routing - incomplete

router.post('/mvp/questions/company-complaint-question', function(request, response) {

    var complaintQuestion = request.session.data['complaintFilter']
    if (complaintQuestion == "usingPersonalDetails"){
        response.redirect("/mvp/outcomes/outcome-personal-details")
    } else if (complaintQuestion == "reportInfo"){
        response.redirect("/mvp/outcomes/outcome-incorrect-info")
    } 
    else if (complaintQuestion == "authCodeProblem"){
        response.redirect("/mvp/outcomes/outcome-auth-code")
    } 
    else if (complaintQuestion == "companyComplaint"){
        response.redirect("/mvp/outcomes/outcome-company-complain")
    } 
    else if (complaintQuestion == "object2"){
        response.redirect("/mvp/outcomes/outcome-objecting-strike-off")
    } 
    else if (complaintQuestion == "complaintSomethingElse"){
            response.redirect("/mvp/outcomes/outcome-something-else")
    } 
    else {
        response.redirect("/mvp/outcomes/generic-outcome")
    }
})
module.exports=router;
