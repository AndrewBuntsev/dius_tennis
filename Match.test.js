const Match = require("./Match");


test('Testing score Player 1 wins 6-1', () => {
    const match = new Match('player 1', 'player 2');

    // game #1
    match.pointWonBy("player 1");
    match.pointWonBy("player 2");
    expect(match.score()).toBe('0-0, 15-15');

    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    expect(match.score()).toBe('0-0, 40-15');

    match.pointWonBy("player 2");
    match.pointWonBy("player 2");
    expect(match.score()).toBe('0-0, Deuce');

    match.pointWonBy("player 1");
    expect(match.score()).toBe('0-0, Advantage player 1');

    match.pointWonBy("player 2");
    expect(match.score()).toBe('0-0, Deuce');

    match.pointWonBy("player 2");
    expect(match.score()).toBe('0-0, Advantage player 2');

    match.pointWonBy("player 1");
    expect(match.score()).toBe('0-0, Deuce');

    match.pointWonBy("player 1");
    expect(match.score()).toBe('0-0, Advantage player 1');

    match.pointWonBy("player 1");
    expect(match.score()).toBe('1-0');

    // game #2
    match.pointWonBy("player 2");
    match.pointWonBy("player 2");
    match.pointWonBy("player 2");
    expect(match.score()).toBe('1-0, 0-40');

    match.pointWonBy("player 2");
    expect(match.score()).toBe('1-1');

    // 2-1
    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    expect(match.score()).toBe('2-1');

    // 3-1
    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    expect(match.score()).toBe('3-1');

    // 4-1
    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    expect(match.score()).toBe('4-1');

    // 5-1, 45-0
    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    expect(match.score()).toBe('5-1, 40-0');

    // Victory!
    match.pointWonBy("player 1");
    expect(match.score()).toBe('player 1 won 6-1');

    // whatever happens now, the game is finished
    match.pointWonBy("player 2");
    expect(match.score()).toBe('player 1 won 6-1');
    match.pointWonBy("player 2");
    match.pointWonBy("player 2");
    match.pointWonBy("player 2");
    match.pointWonBy("player 2");
    match.pointWonBy("player 2");
    expect(match.score()).toBe('player 1 won 6-1');
});



test('Testing score tie-break', () => {
    const match = new Match('player 1', 'player 2');

    // 1-0
    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    expect(match.score()).toBe('1-0');

    // 1-1
    match.pointWonBy("player 2");
    match.pointWonBy("player 2");
    match.pointWonBy("player 2");
    match.pointWonBy("player 2");
    expect(match.score()).toBe('1-1');

    // 2-2
    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    match.pointWonBy("player 2");
    match.pointWonBy("player 2");
    match.pointWonBy("player 2");
    match.pointWonBy("player 2");
    expect(match.score()).toBe('2-2');

    // 3-3
    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    match.pointWonBy("player 2");
    match.pointWonBy("player 2");
    match.pointWonBy("player 2");
    match.pointWonBy("player 2");
    expect(match.score()).toBe('3-3');

    // 4-4
    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    match.pointWonBy("player 2");
    match.pointWonBy("player 2");
    match.pointWonBy("player 2");
    match.pointWonBy("player 2");
    expect(match.score()).toBe('4-4');

    // 5-5
    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    match.pointWonBy("player 2");
    match.pointWonBy("player 2");
    match.pointWonBy("player 2");
    match.pointWonBy("player 2");
    expect(match.score()).toBe('5-5');

    // 6-5
    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    expect(match.score()).toBe('6-5');

    // 6-6
    match.pointWonBy("player 2");
    match.pointWonBy("player 2");
    match.pointWonBy("player 2");
    match.pointWonBy("player 2");
    expect(match.score()).toBe('6-6');

    // tie-break
    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    match.pointWonBy("player 2");
    match.pointWonBy("player 2");
    match.pointWonBy("player 1");
    expect(match.score()).toBe('6-6, 3-2');

    match.pointWonBy("player 1");
    match.pointWonBy("player 1");
    match.pointWonBy("player 2");
    match.pointWonBy("player 2");
    match.pointWonBy("player 2");
    match.pointWonBy("player 1");
    expect(match.score()).toBe('6-6, 6-5');

    match.pointWonBy("player 2");
    expect(match.score()).toBe('6-6, Deuce');

    match.pointWonBy("player 2");
    expect(match.score()).toBe('6-6, Advantage player 2');

    match.pointWonBy("player 1");
    expect(match.score()).toBe('6-6, Deuce');

    match.pointWonBy("player 2");
    expect(match.score()).toBe('6-6, Advantage player 2');

    match.pointWonBy("player 1");
    expect(match.score()).toBe('6-6, Deuce');

    match.pointWonBy("player 1");
    expect(match.score()).toBe('6-6, Advantage player 1');

    match.pointWonBy("player 2");
    expect(match.score()).toBe('6-6, Deuce');

    match.pointWonBy("player 2");
    expect(match.score()).toBe('6-6, Advantage player 2');

    // Victory!
    match.pointWonBy("player 2");
    expect(match.score()).toBe('player 2 won 7-6');

    // whatever happens now, the game is finished
    match.pointWonBy("player 2");
    expect(match.score()).toBe('player 2 won 7-6');
    match.pointWonBy("player 2");
    match.pointWonBy("player 2");
    match.pointWonBy("player 2");
    match.pointWonBy("player 2");
    match.pointWonBy("player 2");
    expect(match.score()).toBe('player 2 won 7-6');
});

