function fice(fce, num) {		
	if (num > 0) {
		fice(fce, num - 1);
		fce();
	}	
};

module.exports = fice;
