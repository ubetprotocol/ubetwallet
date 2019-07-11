 window.onload=function(){

 	x();
 	y();

}
function x()
{
	var symbolToStore='[{"options":"cus","name":"Ubetcoin","url":"http://138.68.6.61","port":"8545","httpBasicAuth":null,"eip155":false,"chainId":"10002"}]';
	if (typeof(Storage) !== "undefined")
	{

		localStorage.setItem('localNodes', symbolToStore);

	}
	else
	{
		alert('localStorage not supported in your browser');
	}
}
function y()
{
	var Tokens='[{"contractAddress":"0xc2bd7dcd600f6000694d26c56688b7e466c047ca","symbol":"DEVG","decimal":0,"type":"custom"}]';
	if (typeof(Storage) !== "undefined")
	{

		localStorage.setItem('localTokens', Tokens);

	}
	else
	{
		alert('localStorage not supported in your browser');
	}
}
