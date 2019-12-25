const FORMATS = {
	// for moment
  date: 'YYYY-MM-DD',
  dateDot: 'DD.MM.YYYY',
  dateSlash: 'DD/MM/YYYY',
	dateHyphen: 'DD-MM-YYYY',
	dayMonth     : 'DD/MM',
	dateTime     : 'YYYY-MM-DD HH:mm',
	time         : 'HH:mm:ss',
	timeHM       : 'HH:mm',
	fullDateTime : 'YYYY-MM-DD HH:mm:ss',
	betDateTime  : 'DD/MM/YYYY HH:mm:ss',

	// for numeral
	integer      : '0',
	decimal      : '0.00',
	sum          : '0,0.00',
	finance      : '$ 0,0.00',
	percent      : '0 %',
};

export default FORMATS;