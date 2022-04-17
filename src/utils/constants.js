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
    },
    {
      id: 'eight',
      value: '8',
    },
    {
      id: 'nine',
      value: '9',
    },
    {
      id: 'four',
      value: '4',
    },
    {
      id: 'five',
      value: '5',
    },
    {
      id: 'six',
      value: '6',
    },
    {
      id: 'one',
      value: '1',
    },
    {
      id: 'two',
      value: '2',
    },
    {
      id: 'three',
      value: '3',
    },
    {
      id: 'zero',
      value: '0',
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
    },
    {
      id: 'multiply',
      value: '*',
    },
    {
      id: 'subtract',
      value: '-',
    },
    {
      id: 'add',
      value: '+',
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
  },
};

export { NUMBERS, OPERATORS, RESULT, DOT, CLEAR };
