package main

import (
	"syscall/js"
)

func main() {

	cards := newDeck()
	cards.shuffle()
	jsArr := js.TypedArrayOf([]byte(cards.toString()))
	js.Global().Set("cards", jsArr)
}
