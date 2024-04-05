const pokedex = document.querySelector('.pokedex');
const searchBar = document.querySelector('.search-bar input');
const types = ['normal', 'fire', 'water', 'grass', 'electric', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'];
const cheatsDB = {
'001': 'AD86124F 2823D8DA',
'002': 'AB84463B B2609644',
'003': '3542F0A7 7D2E171F',
'004': 'DB8C60CD 81FD6AA7',
'005': '08506D61 55CBD9A8',
'006': 'A56395D2 8AF46857',
'007': 'BCDCB406 2F2FD763',
'008': '268349C8 63FF53CE',
'009': '5FD24ABC 1FE3296A',
'010': '358CC2BF 9BFA3518',
'011': 'DC725D4E 3A20792F',
'012': '33EFFB7C E1794F5B',
'013': '9A86D92A 635F8DBC',
'014': 'CCEC9F6E 5A2A0F12',
'015': 'F3D99280 49F4EEDC',
'016': '139BBA32 2DC356C8',
'017': '2F7B0F2F 257173EA',
'018': '13659B39 95BD80E5',
'019': 'E5C49E22 47B157F2',
'020': '60C9DC15 1AD9B226',
'021': '2F5D7856 A5F7B4AE',
'022': '23689847 DA918B8D',
'023': 'A5BA4CFA CA5D771C',
'024': 'B75D69F0 7C3B3103',
'025': '9D4A1BFF 05120D39',
'026': 'CE7B779B AE493550',
'027': '7DFC4CBD 20BB83B6',
'028': 'CFC711B9 0585971F',
'029': 'B6450111 C65005BC',
'030': '0BA329E0 CEB39484',
'031': 'C3B010F5 6DB0ED0E',
'032': 'A38262A2 825F8CF0',
'033': '33D5E08A 037AB9C4',
'034': '82E3DD4B EBFEF864',
'035': 'E8EAB84F 26C8AB6B',
'036': 'D15755D8 AF5BE6F1',
'037': '276AF592 A3A635CC',
'038': '27B815E0 B8CCC2DA',
'039': 'B18AC7E0 E667A184',
'040': '7CEDC4CF F95C5521',
'041': '47596727 51BB292A',
'042': 'FF3A0DD1 DF54EB13',
'043': 'EF723724 F31E5F64',
'044': 'A386B043 9DEB5064',
'045': '4A2748A4 F888F1C9',
'046': 'EAD30258 3988D84F',
'047': '74CFC9E9 82CD278E',
'048': '0CC56D24 C9F5A33A',
'049': 'DFDFFF0A 8919BB28',
'050': 'BA7199EC 664F9418',
'051': 'BCC0FB44 1A047D3C',
'052': '5F38FD3F 5D7412A3',
'053': '0BEC25D3 787468AE',
'054': '70CEC019 12F0A7B0',
'055': '32E8BC37 7712CF08',
'056': 'DAAB0C35 55611812',
'057': 'B82FBCB6 C954F4ED',
'058': 'CD7047AB 42D861F2',
'059': '3099D33C 49E66A04',
'060': 'AF0908F3 650FE1BD',
'061': 'C29C3277 063E67E9',
'062': '8DC834CF BFECCA56',
'063': '5738CFE5 515C61CF',
'064': '67CA1286 0E3A5D83',
'065': 'C91954D9 68AAD246',
'066': '8AD2C8BB EB3D7A39',
'067': '95EFD5EA DD857E98',
'068': '3BF5B7C4 061AAA45',
'069': 'CF2E3B09 3B30426E',
'070': '0030C455 4F43BB12',
'071': '1DF3B8CA DC70EC58',
'072': '65C4E9C5 24CA1894',
'073': '51DDE51A 00DE2CE3',
'074': '399F7170 D519951E',
'075': 'DDF655E3 9BDEE49C',
'076': '103F567C 2F1A9043',
'077': '877A6953 8F6209F2',
'078': '195BAD3F C840CA28',
'079': '4CEC5478 ACBC593C',
'080': 'FE7C44DB 7672B1D8',
'081': '3C17AEA9 5DC9D705',
'082': 'B8BD13C5 E3E7D9B3',
'083': '9121060C 74B908E0',
'084': '920BE3C7 3E00359C',
'085': '02258041 19ABFE29',
'086': '8EC19A12 FD47B55F',
'087': 'E18D1069 1053E30C',
'088': 'EB7F9C3F DB3192F5',
'089': '729160A9 F8F73577',
'090': '92A2030E 24F19E86',
'091': 'FB078533 1A99C72A',
'092': '99B8A848 91759EFF',
'093': '7F14537B 6C00E975',
'094': 'BA9A9758 4221EBF4',
'095': '54D9A0DB 68FC768F',
'096': 'C5C4BBBB 55B1B77F',
'097': 'F4BB6321 8E9265DB',
'098': 'D83FACC2 7D31E557',
'099': 'FF0F431F 400EF220',
'100': 'ABD2C0C0 FBC68A93',
'101': '0C2333CD 141730A7',
'102': '8D2F9E72 8719250B',
'103': '744AF614 12D8281B',
'104': 'D9E3884F 37500E3F',
'105': 'CB4A8BD1 1D028DA2',
'106': '9EDB950D 454533E5',
'107': '3535FA3A EBECD355',
'108': 'F582757C 16122B78',
'109': 'BF93F87F BC1AB791',
'110': 'D966DA15 88BBB73A',
'111': '7DA9C8C7 8549C3D4',
'112': '9071D41E 55259C19',
'113': 'AD38C4DB B5EBB8A7',
'114': '100D1518 466A2D06',
'115': '8F4BE409 7110788B',
'116': '02401CFF F2742052',
'117': 'B0160E28 ED6B68EC',
'118': '29061002 69BB68FF',
'119': '676505B9 904C9DE3',
'120': 'D7D9A00C 7BFB7AAC',
'121': '0E2752FA 51091446',
'122': '0922D9A2 C1E680BA',
'123': '28BEFBB3 68DE4569',
'124': 'FB0FC84E D45216CF',
'125': '1E6DE7CB DDDBAD78',
'126': 'C644F8D1 4159A2D6',
'127': 'AEFBB853 03F4B721',
'128': '1D5557F2 FACC2BA7',
'129': '04658924 E67574E2',
'130': '56156F0A D2F071F2',
'131': '483AC796 E3850B8F',
'132': '3613AA25 2CC1B172',
'133': '4B78A144 F02E1187',
'134': 'D82AEDF5 F23B27A4',
'135': '1850F0B1 AAFB142F',
'136': 'AB622741 B3F84F8B',
'137': '6EE60CB5 746DFF03',
'138': '1DBD6215 4FD65295',
'139': '23F20EC6 1368F543',
'140': '32A2B3E0 40DB80D9',
'141': '2058318E 392B7EE5',
'142': 'C44B6463 DB3237C3',
'143': 'E9ADF485 15BE8FA7',
'144': 'D7B594AF C1DA18AB',
'145': '83E25054 9C927E5E',
'146': 'F8DEC3CC A014B094',
'147': '47C69D5D 1AA59D6D',
'148': '8B3A1FF0 A3C0E786',
'149': '796E6824 2B208DD5',
'150': '4C77BA3F CA4EDCB6',
'151': 'B751BDF4 95CEF4CC',
'152': '539C7E13 DD795F72',
'153': '39D823E3 9EB6C9AA',
'154': 'A2F7F837 7F974DEB',
'155': 'E4995046 3D00BF91',
'156': 'B9CCC7BB D4C29E22',
'157': 'B5592578 FBB9A4ED',
'158': '6699EF70 D7B03D43',
'159': '33C5C90B D46AD9DC',
'160': 'E1F0FEFA D0036CD4',
'161': '6C2D5D5E 008A751F',
'162': '2B34A3C7 A829209F',
'163': 'B33DAC5B 29EB7EB5',
'164': '8E0B9473 A4AE2B53',
'165': '5F2FD32D 941693B4',
'166': '1CD7078F A7384A34',
'167': 'BF975E40 430B4806',
'168': 'F3D55605 74AE5C52',
'169': '56FC2792 3AEFE3F9',
'170': 'D70D1018 A021245F',
'171': '2D2CC458 21BDD10C',
'172': '90AECEE5 A888F8AE',
'173': '08C2447D 2096B6AE',
'174': 'D7F35EE0 D224ECDE',
'175': '82269FC8 9579FD5A',
'176': 'E3581C9B AE652F9A',
'177': 'B635603F B1E81481',
'178': '459823AE 3F1683A4',
'179': '0783E965 C5165BF8',
'180': 'F510A285 5288E291',
'181': '3CE54322 74A86618',
'182': 'F0088391 0C65D5E3',
'183': '51EB125F EAA0FCBE',
'184': 'E832EF37 64D0E6A2',
'185': 'DDA1AC43 4A067FAE',
'186': '5C6CD179 E18C31EF',
'187': 'B1BC8307 69EF9C2C',
'188': 'E32EA0FE CB37FF3B',
'189': 'C03FCFEF 84CB37BA',
'190': 'A45DFE4F F27A9D8D',
'191': '165C689B AF94A177',
'192': '36838BE7 E5367C3A',
'193': 'E500846E 9A4FF5C7',
'194': '6F071CA9 63FF4902',
'195': '67375392 E7F55C24',
'196': 'EF8A105C 72CEF63E',
'197': 'EF708FD1 C5E8B000',
'198': '98F8C8F7 EEA657B9',
'199': '43D2617C C2F14DFB',
'200': '2E5E5AEB 22EBF9FF',
'201': '10998FB0 656B5C99',
'202': 'EC4EB940 2C63CA65',
'203': '41377A90 E36247DE',
'204': '43C3A9BF 477AF067',
'205': '55815067 03B03952',
'206': '4F8D48EA 9336834B',
'207': '729F34AB 5B1018D0',
'208': '1FE62E14 130CD2F8',
'209': '77C7197D 502B8B56',
'210': 'CF223304 929E964E',
'211': 'C9551136 F45B0236',
'212': 'F8D4BFAE D2C136F5',
'213': 'A94D8CB8 560257D4',
'214': '779D6EBF 3139EFF6',
'215': 'C21BA23A 95AB64BD',
'216': 'EDEB2FF0 88466B79',
'217': '2607FA8F 4BF940FA',
'218': 'E2899947 9269834F',
'219': 'A58E1198 6E004BAD',
'220': 'F949DADD BBC8B5CD',
'221': 'AA68D49C B33C8972',
'222': 'DDEFF53A EC57A23F',
'223': 'A67D580A B44A4DF4',
'224': '78BA5E9D BA836EEB',
'225': 'BC1FE4EC 9F1818A1',
'226': '3AF8DB31 042E9DF9',
'227': '92DE3CD4 65C14106',
'228': 'CABF0A0B B0E620D3',
'229': 'D8D99C49 B49D47DC',
'230': '2B185541 DB13ACF6',
'231': 'CBCB02D6 C41FE3F4',
'232': 'B8A6C516 12ECADE5',
'233': '04EA10C3 8DB0146F',
'234': '9C0B5F02 A2857BBC',
'235': '49D7E467 103D0D48',
'236': '3D2030E2 B2A0CACE',
'237': 'A357C435 8BC380D1',
'238': '8C287F7F E3950A6E',
'239': 'A78E8FFA EDB5DA5C',
'240': 'D77AEB51 E63292DB',
'241': '1A55F1D1 2FCDADEA',
'242': '01EA07BF 793C86F2',
'243': '43FF33D1 F368CDE6',
'244': '0C8037A6 BE1D9DB2',
'245': '80755BDB E392B806',
'246': '2C8E4296 84D8D6E3',
'247': '8418E051 5C53CE38',
'248': '32D66B09 40354103',
'249': '545C676A 51FFDC1C',
'250': '437065EF 67DF37EF',
'251': '4AEC27E8 A5FF1540',
'252': '3BA410B6 94CBB557',
'253': 'D9FE5FBF B09F0205',
'254': '1AA369E5 72BBA287',
'255': '673752FC D4065FA8',
'256': '2F22FB72 D5887213',
'257': '136BD0D6 606187D2',
'258': 'FCEF6F25 3905588C',
'259': 'A72262EA 7F7FD464',
'260': '8EED2DB5 964D67F8',
'261': '1A6BE162 4481A843',
'262': '7A1769D1 40699C90',
'263': '4B9FB849 14A5AA94',
'264': 'F1F00B1F F5B3721A',
'265': 'EF31EC55 1417DEC6',
'266': 'A83BF115 130C3917',
'267': '2244D1D6 A87DAAB7',
'268': '6DBB6131 90E40C0A',
'269': 'AD5C9BC6 8E3E4C3B',
'270': '7CC9941A A70E2C37',
'271': 'D4BE7AA5 F9CE65B8',
'272': '9459FC5B 5516BE48',
'273': '809DED68 B67856D4',
'274': 'DCE40F64 D45D202E',
'275': 'BF87B744 16F7C28C',
'276': '52C2D901 7344A4FA',
'277': 'BBB05E5B 3A3FDC85',
'278': 'CDB2A8AF 7D43F8B7',
'279': 'C963D063 10F5AC28',
'280': '6BCA1BD9 953420E2',
'281': '86C62F1D 27B0AF88',
'282': '1A2EEF24 65E331B7',
'283': '73285D38 A5A4E2BD',
'284': '00C9CFD8 65021DD5',
'285': 'D0B107DB 027BEBD8',
'286': '3F140B0A 5937E9BE',
'287': '23E5A94B D21E7E80',
'288': '485C366A DA423D56',
'289': 'FEA287AE FFB54BB5',
'290': '3C703413 6B8119CC',
'291': '43A8378B 9EF75A96',
'292': '22DDE250 8D8EC616',
'293': '50C81E21 6119F922',
'294': 'FBC2DB33 D8FC5AC6',
'295': 'FE9AF7C9 14FDA298',
'296': '911CF1D9 1617CFE7',
'297': '7B801817 11F090AA',
'298': 'B277605C 646BAD0D',
'299': '5413C7F0 CE1DFBD5',
'300': '47B99235 3CAC8E1F',
'301': 'B4015263 3D8633C6',
'302': '42084D1D C19BB889',
'303': 'DB37A521 AA84D2C4',
'304': 'A80E3734 B2245A9B',
'305': 'EEC41DEB 3342969F',
'306': '79BE0284 FA8BF8A0',
'307': '5F3C63E3 B673BE5E',
'308': '0E4C4AA5 E7F532D7',
'309': '4D371C9E 0A2DF533',
'310': '3F5C8201 651A6EFD',
'311': '7FD8F8C5 BEAD0097',
'312': 'B135B018 4F5665D6',
'313': '06C43F9A 7BD8363C',
'314': 'B86B39BB 97DC88B5',
'315': 'C7A5752A B4204332',
'316': '5D38F9C5 DAA67938',
'317': 'A86C4608 9C15E158',
'318': 'F78C3DA6 F97B5B3D',
'319': 'A9CF954D E9766F71',
'320': 'A14CF5B9 0D7133A1',
'321': '769A7373 7F6C71B8',
'322': '9AA97665 37DD44B1',
'323': 'AA1264F4 8D3DB4BE',
'324': '1442906D 473E0C26',
'325': '26ADB7EE 91286E09',
'326': 'BF9B34C2 D768D3A9',
'327': 'A32B0FED 60C07CFA',
'328': 'E684507C B44D6D05',
'329': 'B1088C6F 3E950D4C',
'330': '4DC25E25 13510F3C',
'331': 'AF5D5782 CEF3B5F2',
'332': 'E50B77C1 C220E7C0',
'333': '063E4A1A E5A25573',
'334': 'F8AC663C 65487239',
'335': '80AFF5CB E67520AD',
'336': 'EC92A4E9 B9482C67',
'337': '50020D7B 77627E33',
'338': '3F5FE916 3075AF6E',
'339': '8D571791 584F1676',
'340': 'B5BCD3CC DB08C2DA',
'341': 'F12028C4 0328D5DD',
'342': 'EFA89FA3 A3E1A789',
'343': '74154C68 0EF0C16F',
'344': 'F20AE4A5 8B610FCA',
'345': 'F75A3D1C 04A663CF',
'346': '461F0590 FCD7E05C',
'347': '15C4B0A5 E98A0379',
'348': 'E98E6596 D6AFAB27',
'349': '85125B29 D2CE1B37',
'350': '6E805A17 D4A84889',
'351': '8388E07F 48E67820',
'352': '3088742E D89961FA',
'353': '84DDB13C BF8191AE',
'354': '8341095A BEE333E8',
'355': 'CB8303C4 2D5A9910',
'356': 'A2E933B5 2F11EC3E',
'357': 'CA12CA9A 91D29CAF',
'358': '27C35F73 A8E9E879',
'359': '59D84A8F 121CD813',
'360': '77BF3639 95EBCE8C',
'361': '5BFC0B46 9DDC0643',
'362': 'B0C7AEC3 524643FF',
'363': '5166F096 A0F21E46',
'364': 'E52A33D8 9E4152F7',
'365': '1CAA4FF9 CFBC38AC',
'366': '14182A0A 79282B1B',
'367': 'AC4037BF 03D48B47',
'368': '0C724AF3 BA81EAA3',
'369': 'F18DC227 1C86F9E4',
'370': '44DD8537 0FACB798',
'371': '7D45FD6B BAABF3CF',
'372': 'D701EA4F 59B08C77',
'373': 'CECF6CF9 AFA8D274',
'374': '2FCB50C0 DBECD9CB',
'375': 'ACB05D5E 076626E0',
'376': 'BD2BFF8F FE6AA4DB',
'377': 'CA6230A5 D89220E0',
'378': 'A72D5514 4128DA3D',
'379': '1A2209C5 C0228D4C',
'380': 'C5ECDE5B 0D6B09C8',
'381': '26A5F4EA 772A0B12',
'382': '742ED98D 9B284DFA',
'383': '16AFD4E7 E10BFB55',
'384': '0002FF77 A52C0BAF',
'385': '72BAB975 7E4038A8',
'386': 'FFF032FD FAF9AFD2'
};
let pokemonData = [];

const fetchPokemon = async () => {
  for (let i = 1; i <= 386; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    const response = await fetch(url);
    const pokemon = await response.json();
    pokemonData.push(pokemon);
    createPokemonCard(pokemon);
  }
};

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');
  const pokemonTypes = pokemon.types.map((type) => type.type.name);
  const pokemonNumber = pokemon.id.toString().padStart(3, '0');
  const pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  const pokemonCheats = `Cheat para pegar ${pokemonName} no jogo Fire Red: ${pokemonNumber} ${pokemonName.toUpperCase()}`;
  pokemonEl.innerHTML = `
    <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemonName}">
    <h2 class="name">${pokemonNumber}. ${pokemonName}</h2>
    <div class="types">${getPokemonTypes(pokemonTypes)}</div>
    <div class="cheats">${cheatsDB[pokemonNumber]}</div>
  `;
  pokedex.appendChild(pokemonEl);
};

const getPokemonTypes = (types) => {
  return types
    .map((type) => {
      return `<span class="type ${type}">${type}</span>`;
    })
    .join('');
};

const filterPokemonByNameOrNumber = (searchString) => {
  const filteredPokemon = pokemonData.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchString) || pokemon.id.toString().includes(searchString);
  }).sort((a, b) => {
    return a.id - b.id;
  });
  removePokemonCards();
  filteredPokemon.forEach((pokemon) => {
    createPokemonCard(pokemon);
  });
};

const removePokemonCards = () => {
  while (pokedex.firstChild) {
    pokedex.removeChild(pokedex.firstChild);
  }
};

fetchPokemon();

searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();
  filterPokemonByNameOrNumber(searchString);
});

