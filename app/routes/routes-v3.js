//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()



// Add your routes here



// version 3 routing

// start page to first question
router.post('/v3/start', function (req, res) {

    res.redirect('/v3/question-one')
  
  })

  // question 1 radio options routing - incomplete
router.post('/v3/question-one', function(request, response) {

    var questionOne = request.session.data['whatDoYouNeed']
    if (questionOne == "register"){
        response.redirect("/v3/generic-outcome")
    } else if (questionOne == "filing"){
            response.redirect("/v3/filing-question")
    } else if (questionOne == "penalties"){
        response.redirect("/v3/penalties-question")
    }
    else if (questionOne == "report"){
        response.redirect("/v3/company-complaint-question")
    } else if (questionOne == "somethingElse"){
        response.redirect("/v3/outcome-something-else")
    }
    else {
        response.redirect("/v3/generic-outcome")
    }
})

// filing filter question radio routing - incomplete

router.post('/v3/filing-question', function(request, response) {

    var filingQuestion = request.session.data['filingFilter']
    if (filingQuestion == "confirmationStatement"){
        response.redirect("/v3/outcome-conf-stat")
    } else if (filingQuestion == "filingAccounts"){
            response.redirect("/v3/outcome-accounts")
    } else if (filingQuestion == "changeFiling"){
        response.redirect("/v3/filing-sub-question")
    } else if (filingQuestion == "filingLogIn"){
        response.redirect("/v3/outcome-sign-in")
    } else if (filingQuestion == "trackFiling"){
        response.redirect("/v3/outcome-track-filing")
    } else if (filingQuestion == "somethingElse"){
        response.redirect("/v3/outcome-something-else")
    } 
     else {
        response.redirect("/v3/generic-outcome")
    }
})


// filing update or change sub question routing

router.post('/v3/filing-sub-question', function(request, response) {

    var updateQuestion = request.session.data['updateFilter']
    if (updateQuestion == "directorUpdate"){
        response.redirect("/v3/generic-outcome")
    } else if (updateQuestion == "pscChanges"){
            response.redirect("/v3/generic-outcome")
    } else if (updateQuestion == "fileShares"){
        response.redirect("/v3/outcome-shares")
    } else if (updateQuestion == "somethingElse"){
        response.redirect("/v3/outcome-something-else")
    } 
     else {
        response.redirect("/v3/generic-outcome")
    }
})




// penalties filter question radio routing - incomplete

router.post('/v3/penalties-question', function(request, response) {

    var penaltiesQuestion = request.session.data['penaltiesFilter']
    if (penaltiesQuestion == "appealingPenalty"){
        response.redirect("/v3/outcome-appeal")
    } else if (penaltiesQuestion == "penaltiesSomethingElse"){
            response.redirect("/v3/outcome-something-else")
    } else {
        response.redirect("/v3/generic-outcome")
    }
})


// report filter question radio routing - incomplete

router.post('/v3/company-complaint-question', function(request, response) {

    var complaintQuestion = request.session.data['complaintFilter']
    if (complaintQuestion == "usingPersonalDetails"){
        response.redirect("/v3/outcome-personal-details")
    } else if (complaintQuestion == "complaintSomethingElse"){
            response.redirect("/v3/outcome-something-else")
    } else if (complaintQuestion == "cantSignIn"){
        response.redirect("/v3/outcome-sign-in")
    } else if (complaintQuestion == "companyComplaint"){
        response.redirect("/v3/outcome-company-complain")
    }
    else {
        response.redirect("/v3/generic-outcome")
    }
})
module.exports=router;
