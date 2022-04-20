const NUMBERS = {
  style: {
    backgroundColor: '#4d4d4d',
    color: '#fff',
    '--hovColor': 'black',
    '--hovBgColor': '#aaa',
  },
  keys: [
    {
      id: 'seven',
      value: '7',
      keyCode: '7',
    },
    {
      id: 'eight',
      value: '8',
      keyCode: '8',
    },
    {
      id: 'nine',
      value: '9',
      keyCode: '9',
    },
    {
      id: 'four',
      value: '4',
      keyCode: '4',
    },
    {
      id: 'five',
      value: '5',
      keyCode: '5',
    },
    {
      id: 'six',
      value: '6',
      keyCode: '6',
    },
    {
      id: 'one',
      value: '1',
      keyCode: '1',
    },
    {
      id: 'two',
      value: '2',
      keyCode: '2',
    },
    {
      id: 'three',
      value: '3',
      keyCode: '3',
    },
    {
      id: 'zero',
      value: '0',
      keyCode: '0',
    },
  ],
};

const OPERATORS = {
  style: {
    backgroundColor: '#777',
    color: '#fff',
    '--hovColor': 'black',
    '--hovBgColor': '#aaa',
  },
  keys: [
    {
      id: 'divide',
      value: '/',
      keyCode: '/',
    },
    {
      id: 'multiply',
      value: '*',
      keyCode: '*',
    },
    {
      id: 'subtract',
      value: '-',
      keyCode: '-',
    },
    {
      id: 'add',
      value: '+',
      keyCode: '+',
    },
  ],
};

const RESULT = {
  style: {
    backgroundColor: '#004466',
    color: '#fff',
    '--hovColor': 'white',
    '--hovBgColor': '#002f47',
  },
  key: {
    id: 'equals',
    value: '=',
    keyCode: 'ENTER',
  },
};

const DOT = {
  style: {
    backgroundColor: '#4d4d4d',
    color: '#fff',
    '--hovColor': 'black',
    '--hovBgColor': '#aaa',
  },
  key: {
    id: 'decimal',
    value: '.',
    keyCode: '.',
  },
};

const CLEAR = {
  style: {
    backgroundColor: '#ac3939',
    color: '#fff',
    '--hovColor': 'white',
    '--hovBgColor': '#892d2d',
  },
  key: {
    id: 'clear',
    value: 'AC',
    keyCode: 'ESCAPE',
  },
};

export { NUMBERS, OPERATORS, RESULT, DOT, CLEAR };
