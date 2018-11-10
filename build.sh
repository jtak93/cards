#!/bin/bash
echo "Building Cards Wasm"

GOOS=js GOARCH=wasm go build -o client/wasm/main.wasm src/main.go src/deck.go