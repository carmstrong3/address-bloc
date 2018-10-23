const MenuController = require("../controllers/MenuController");

describe("MenuController", () => {
  describe("#remindMe()", () => {
    it("should return the string 'Learning is a life-long pursuit' when called", () => { 
      const menu = new MenuController;
      expect(menu.remindMe()).toBe("Learning is a life-long pursuit");
    }); 
  });
});
