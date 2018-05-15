numeral.register('locale', 'nl', {
    delimiters: {
        thousands: '.',
        decimal: ','
    },
    abbreviations: {
        thousand: 'k',
        million: 'mln', // miljoen
        billion: 'mrd', // miljard
        trillion: 'bln' // biljoen
    },
    ordinal : function (number) {
        var remainder = number % 100;
        return (number !== 0 && remainder <= 1 || remainder === 8 || remainder >= 20) ? 'ste' : 'de';
    },
    currency: {
        symbol: '€'
    }
});

numeral.locale('nl');