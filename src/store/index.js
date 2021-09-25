import { reactive } from "vue";

const state = reactive({
    playerScore: 0,
    computerScore: 0,
    options: ['Rock', 'Paper', 'Scissors'],
    currentGame: {
        player: '',
        computer: ''
    },
    rules: ['RS', 'PR', 'SP']
})

const methods = {
    choose(val) {
        const random = Math.floor(Math.random() * state.options.length)
        _newGame(val, state.options[random])
    }
}

function _newGame(playerPick, computerPick) {
    state.currentGame.computer = computerPick
    state.currentGame.player = playerPick

    const p = playerPick.charAt(0);
    const c = computerPick.charAt(0);

    if (p == c) {
        console.log('Draw!')
        return;
    } else if (state.rules.map(v => v.charAt(0)).findIndex(v => v == p) == state.rules.map(v => v.charAt(1)).findIndex(v => v == c)) {
        console.log('Win');
        state.playerScore++
    } else {
        console.log('Lose!')
        state.computerScore++
    }
}

export default {
    state,
    methods
}