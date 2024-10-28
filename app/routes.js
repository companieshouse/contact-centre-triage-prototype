//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()



// Add your routes here

// start page to first question
router.post('/v1/start', function (req, res) {

    res.redirect('question-one')
  
  })

  // question 1 radio options routing - incomplete
router.post('/question-one', function(request, response) {

    var questionOne = request.session.data['whatDoYouNeed']
    if (questionOne == "register"){
        response.redirect("/v1/register-outcome")
    }if (questionOne == "filing"){
            response.redirect("/v1/filing-question")
    } else {
        response.redirect("/v1/generic-outcome")
    }
})

// filing filter question radio routing - incomplete

router.post('/filing-question', function(request, response) {

    var filingQuestion = request.session.data['filingFilter']
    if (filingQuestion == "confirmationStatement"){
        response.redirect("/v1/outcome-conf-stat")
    }if (filingQuestion == "filingAccounts"){
            response.redirect("/v1/outcome-accounts")
    } else {
        response.redirect("/v1/generic-outcome")
    }
})

// test-change