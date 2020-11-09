export const calculator_address = '0x96E826719332AEB611f61EE8E6C80F68F8a5c148'
export const calculator_abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "nb1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "nb2",
				"type": "uint256"
			}
		],
		"name": "add",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "adderContract",
		"outputs": [
			{
				"internalType": "contract Adder",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "nb1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "nb2",
				"type": "uint256"
			}
		],
		"name": "div",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "divisorContract",
		"outputs": [
			{
				"internalType": "contract Divisor",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "nb1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "nb2",
				"type": "uint256"
			}
		],
		"name": "mult",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "multiplierContract",
		"outputs": [
			{
				"internalType": "contract Multiplier",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "nb1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "nb2",
				"type": "uint256"
			}
		],
		"name": "sub",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "suberContract",
		"outputs": [
			{
				"internalType": "contract Suber",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]