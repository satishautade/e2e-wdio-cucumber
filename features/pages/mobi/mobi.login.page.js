import MobiPage from '../../pages/mobi/mobi.page'

class MobiLoginPage {
  
  get userInput() { return $('#Login_MemberID')  }
  get nextButton() { return $('#Screen_Landing_Next') }
  get userPassword(){ return $('#Screen_Login_Password')}
  get stayLoggedInCheckbox(){ return $('#Screen_Login_StayLoggedIn') }
  get loginButton(){ return $('#Screen_Login_Next')}

  get prescriptionSectionOnDashboard(){ return $('#Dashboard_PrescriptionDrugsList')}

  loginAs(username , password){

    MobiPage.acceptDataPolicyTerms()

    this.userInput.setValue(username)  
    this.nextButton.click()

    MobiPage.hardWaitForPageReload()

    this.userPassword.setValue(password)
    this.loginButton.click()

    MobiPage.hardWaitForPageReload()

  }

  verifyLandingScreen(){
    this.prescriptionSectionOnDashboard.waitForDisplayed(5000)
  }

}

export default new MobiLoginPage()