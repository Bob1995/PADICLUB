var LogoutpageObject=function(){

      this.openMenuDropdown=$('[ng-click="vm.openMenu()"]')
      this.logoutTab=element(by.linkText('Logout'))
      //$('[ng-click="vm.logOut()"]')
      this.logout=function(){
          this.openMenuDropdown.click()
          browser.sleep(3000)
          this.logoutTab.click()
      }
}
module.exports=LogoutpageObject