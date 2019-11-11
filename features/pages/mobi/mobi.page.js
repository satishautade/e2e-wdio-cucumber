class MobiPage {
  
  get mobiIframe() { return $('#MobileWebsite') }
  get acceptPolicyButton(){ return $('input#user-data-policy-btn') }
  
  constructor(){
    browser.url('')
  }
  
  switchToIframe(locator){
    console.log("ELEMENT TO SWITCH TO" + locator)
    if(locator){
      $(locator).waitForExist(5000)
      browser.switchToFrame($(locator))
    }
    else{
      browser.switchToParentFrame()
    }
  }

  acceptDataPolicyTerms(){
    this.switchToIframe('#MobileWebsite')
    this.acceptPolicyButton.click()
  }

  hardWaitForPageReload(timeout = 3000){

    // *** BEGINNING OF CODE SMELL
    // There is silent page refresh inside the #MobileWebsite iframe after clicking Next button
    // Ideally browser.pause i.e. hard waits should never be used in a test.
    // Instead we should use some kind of conditional wait but in this case there is no condition we can wait on
    // Please do NOT follow this pattern elsewhere unless you absolutely have no condition to evaluate

    browser.pause(timeout)

    // END OF CODE SMELL ***

  }

  printPageSource(){
    $('html').waitForExist(2000)
    const currentDocument = $('html')
    const htmlSource = currentDocument.getHTML()
    console.log(htmlSource)
  }
}

export default new MobiPage()