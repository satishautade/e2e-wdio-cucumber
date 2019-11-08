
class MobiPage {
  
  get mobiIframe() { return $('#MobileWebsite') }
  get acceptPolicyButton(){ return $('input#user-data-policy-btn') }
  
  constructor(){
    browser.url('')
  }
  
  switchToIframe(locator){
    const ele = locator? locator : '#MobileWebsite';
    console.log("ELEMENT TO SWITCH TO" + ele)
    if(ele){
      $(ele).waitForExist(2000)
      browser.switchToFrame($(ele))
    }
    else{
      browser.switchToDefaultContent()
    }
  }

  acceptDataPolicyTerms(){
    this.switchToIframe('#MobileWebsite')
    this.acceptPolicyButton.click()
  }

  printPageSource(){
    const currentDocument = $('html')
    const htmlSource = currentDocument.getHTML()
    console.log(htmlSource)
  }
}

export default new MobiPage()