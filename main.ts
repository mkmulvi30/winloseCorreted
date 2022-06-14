// When true. Button A should be pressed and you will get "You Win" 3 times. If button b is pressed you will see and X, "you lost",X once. When false the circle icon will appear. 
while (true) {
    if (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 3; index++) {
            basic.showString("You Win")
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.No)
        basic.showString("You Lost")
        basic.showIcon(IconNames.No)
    }
}
basic.showIcon(IconNames.Square)
