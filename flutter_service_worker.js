'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "60f0024bafb00c8457e3b222df278195",
"index.html": "1833218ce3347aad263f815b56f323c8",
"/": "1833218ce3347aad263f815b56f323c8",
"main.dart.js": "1cba35954531e448c0d9ed9e8393c4c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c7ac55775b936f67256fb0a1fb5d250b",
"assets/images/ic_page_three.png": "289f0d9e823e1981166ea45330a13fb8",
"assets/images/ic_id_back.png": "46f97d277d68a2d1d2f9560ce0fb576c",
"assets/images/ic_owned_home.png": "edf2a1498d7b61eb728bd47fcc76b658",
"assets/images/bg_scan_license.png": "1741e8702e3bc52b91bcc40a3cf940cb",
"assets/images/ic_scenarios.png": "b7368c8db88d0049cd0c83115210b4b7",
"assets/images/ic_income.png": "3c623ccbd193cce0182e29bbb0891fe7",
"assets/images/ic_page_two.png": "03c2f7b44a867eb26db0b4971353c9ce",
"assets/images/ic_eye_closed.png": "d435025d38a07d2ca3ecbcca0584e6e2",
"assets/images/ic_w2.png": "41dfd0cbba8b91bcc2b81f4de007479c",
"assets/images/img_check.png": "0d6d2fe187447d140d7c69ffbdc21df2",
"assets/images/ic_password.png": "3fc391d2258b3598ff1318854add0e63",
"assets/images/img_check_small.png": "52462bf7dde0c6279d74447b7cc559e7",
"assets/images/ic_sample_ero_logo.png": "b36d317c9dd17df233e1dc02d7248ebe",
"assets/images/ic_calendar.png": "f7080f1b7c40248f34088a598e42e035",
"assets/images/img_create_account.png": "9692a98c7b39a87e492a2f099fe910e8",
"assets/images/ic_card_frame.png": "644492a03156ade8d0ee41b76e76674e",
"assets/images/ic_social_security.png": "16a4c4d3299e9a073bd142a681c205b4",
"assets/images/ic_account_type.png": "85563cc7d9e0c02ea082e197aa156948",
"assets/images/ic_vehicle.png": "7b952f5504af0ffe5f5f53df5695fe90",
"assets/images/ic_radio_unselected.png": "922cd0275ddbf6f8b6ac76b90a6a408f",
"assets/images/app_icon.png": "c767e2a39a163b0f51a75c63303997de",
"assets/images/ic_selfie.png": "1b1c452a2175db715586d415f3721f48",
"assets/images/ic_close.png": "5c41c9b0bf702794c7fe627d489956b4",
"assets/images/ic_dropdown.png": "de96a76e4a9be7aeb9584d9bf8feb9b0",
"assets/images/ic_base_summary.png": "d0ddb915ab9ff0ebe35f5d4d823cf5f2",
"assets/images/ic_office.png": "1971b0f2e9b764192148f0ae3ac26b20",
"assets/images/ic_office_info_bg.png": "945247050422544a7450111f1de8f615",
"assets/images/ic_search_connect.png": "b08e0e52e881d5414d48976a89b6754a",
"assets/images/2.0x/ic_page_three.png": "21ca72a5c2f8828c88a997a8a659fb6c",
"assets/images/2.0x/ic_id_back.png": "05c784b7c5b1e66e6a0a91a11a7e3ddf",
"assets/images/2.0x/ic_owned_home.png": "53f99ca81cf277da33c66fb0c1b14e5d",
"assets/images/2.0x/bg_scan_license.png": "5248871d7be5163396330382a0b16adc",
"assets/images/2.0x/ic_scenarios.png": "2844573649006c9cb14d22c113698217",
"assets/images/2.0x/ic_income.png": "6457676285d9927c614d5fd2c389488b",
"assets/images/2.0x/ic_page_two.png": "07c0a54b9202812f2745955dcb98bf60",
"assets/images/2.0x/ic_eye_closed.png": "a204487e55434f3546ca714a01632575",
"assets/images/2.0x/ic_password.png": "7ace22d34a73694df493581b1f3bbf9c",
"assets/images/2.0x/ic_sample_ero_logo.png": "8dcea98a6378a66f5ecc0c87eaa14a88",
"assets/images/2.0x/ic_calendar.png": "a314f8bc19c3edaa5811947b41ec124a",
"assets/images/2.0x/img_create_account.png": "169c33e53314301c5b0928942cb77318",
"assets/images/2.0x/ic_card_frame.png": "61445df35694d22e7c15decd8656ce8b",
"assets/images/2.0x/ic_account_type.png": "8d80dc9a304fa2c8242fde4fa2eeea03",
"assets/images/2.0x/ic_vehicle.png": "00fc261226eb40380252271608989763",
"assets/images/2.0x/ic_selfie.png": "c0d762fa5649181f1af0ffb80ead62c6",
"assets/images/2.0x/ic_close.png": "79fdb17f73bf871203c6e1df255eb137",
"assets/images/2.0x/ic_dropdown.png": "bdf4804d60d7c99e2531f671b82aee47",
"assets/images/2.0x/ic_base_summary.png": "941c3e232d3abae65e3eba8af6f6cf50",
"assets/images/2.0x/ic_office.png": "8d945510315f6af2b027db8ccc1deed8",
"assets/images/2.0x/ic_office_info_bg.png": "157471137b6af769e0042c2b28bd1a49",
"assets/images/2.0x/ic_search_connect.png": "b1796172a6f771c6e409b70b7776a651",
"assets/images/2.0x/ic_save_info.png": "64add619e5acb50d3e7003e81c753e61",
"assets/images/2.0x/ic_account_number.png": "37aa3e3e6367cb4d02aeb8a19cb6e7a6",
"assets/images/2.0x/ic_reset_password.png": "580c0ec67df5f4d2d91b4bd4fc6c18c0",
"assets/images/2.0x/ic_code.png": "9edfc0be951346f5296bacb65f7ee355",
"assets/images/2.0x/ic_thumbnail_photo_item.png": "dd4a4dc908a7ca83ae7c325f2e3b8099",
"assets/images/2.0x/splash_screen_logo.png": "553fce7677059443366735a78c5d3c31",
"assets/images/2.0x/ic_checkbox_unselected.png": "887b84fea3564ed54df3c3fc2612f741",
"assets/images/2.0x/ic_checkbox_selected.png": "615ec29e4ac0bb1c0036488cedeb6c69",
"assets/images/2.0x/ic_routing.png": "c8956e6dba1432413690a3713612f07c",
"assets/images/2.0x/ic_error.png": "715bfad40c136a0aea7c394d88ddda43",
"assets/images/2.0x/ic_donations.png": "11b5319fd8a377a77c9a4ee2e24bb44b",
"assets/images/2.0x/ic_black_button.png": "57003456d01799f55a057b1779632eb1",
"assets/images/2.0x/ic_job_expenses.png": "b24b37fc25e3c23de280664b6eb2749d",
"assets/images/2.0x/ic_cross.png": "0ea5606be02b807122049fa0fbaf167c",
"assets/images/2.0x/ic_messages.png": "8b77e4847983c0b6dffe39bd98e28aae",
"assets/images/2.0x/ic_additional_documents.png": "4740181ac52afa82ee75627cf0d82b5e",
"assets/images/2.0x/intro_professional.png": "21b4b79faeedbdb282a63abcedfc7d98",
"assets/images/2.0x/ic_back_arrow.png": "0aec00fcd080d3ec98957c5c5263ac65",
"assets/images/2.0x/ic_mail.png": "3e4974f27221b40bf31b5b9ce6c1dcce",
"assets/images/2.0x/ic_share.png": "a5aeb02088cf65b9fb603471653ec9e8",
"assets/images/2.0x/ic_dependents.png": "6a8cd9e05b9651b32b4354697a075271",
"assets/images/2.0x/ic_education.png": "be13491c096b491aea26365c316b54b9",
"assets/images/2.0x/ic_scan_license.png": "2b832e1414a9749627a6e63b66fe67dd",
"assets/images/2.0x/bg_congratulations.png": "2dfd180a83dca40b2b5d7c4608ab33b0",
"assets/images/2.0x/ic_taxpayer.png": "f909997acab486e3edbe24bced6b03ce",
"assets/images/2.0x/ic_vault.png": "8961bd7f91586e1c7162cb8d637a3eb3",
"assets/images/2.0x/ic_bank_account.png": "4bbf7a6f9545735eaaf3590aa2a4af98",
"assets/images/2.0x/ic_front_ssn.png": "2755b77cb7aa862443df6b49f84749c2",
"assets/images/2.0x/main_background.png": "6389ce50568bfc27a0152a364fb27a0a",
"assets/images/2.0x/ic_settings.png": "3cd437b802b32c5dd79b705c6e896c64",
"assets/images/2.0x/intro_convenient.png": "fabacd4e0f2ce7d6a816b33836bcc416",
"assets/images/2.0x/connect_logo.png": "6f7e9a607049693d5e2550ad696f129d",
"assets/images/2.0x/ic_medical_expenses.png": "01e95db721e55cab83279bf486305f06",
"assets/images/2.0x/ic_back.png": "384947bd2e7823cbe0fcbfc6e7e4050b",
"assets/images/2.0x/ic_ready_to_file.png": "50c9fb618f50927954cebfc6fdd50335",
"assets/images/2.0x/ic_spouse.png": "a8aabda9de69d95e581cf5fe04c52e39",
"assets/images/2.0x/intro_secure.png": "c79e86ab68e4bd5561dd93524572e1de",
"assets/images/2.0x/ic_chat.png": "c70644f469d5efd85da8d413382251c8",
"assets/images/2.0x/ic_page_one.png": "d33959381353c7bbf6f8df93af9e805a",
"assets/images/2.0x/ic_breaks_checkmark.png": "f1b84dd885e8d30e51b3f492296b1fcf",
"assets/images/2.0x/ic_email.png": "bde979d1a6bb64c780aa5e4702bcc33a",
"assets/images/2.0x/back_button.png": "e1c8383a4d28a8fc4a9021abf69414d3",
"assets/images/2.0x/ic_inperson.png": "8d9b8dbf30342b9602bce2b0de60e59c",
"assets/images/2.0x/bg_create_account.png": "533f428d68f141a739fef555a5ebf719",
"assets/images/2.0x/ic_snapshot.png": "0f3f4fcd2196923199d5e6f12dcb4883",
"assets/images/2.0x/ic_tax_breaks.png": "17a333b68d0046306354ac154fd8e490",
"assets/images/2.0x/ic_checkmark.png": "f39f911aaeee1261f554dc67d9ba7c47",
"assets/images/2.0x/barcode_image.png": "70f7bda2deb41ccf2af44d27490d31b0",
"assets/images/2.0x/ic_id_front.png": "e5392b8d6fcdc8313f8783007e667acc",
"assets/images/2.0x/ic_warning.png": "a1a07a172569f772c85a03b449317692",
"assets/images/2.0x/ic_lets_started.png": "8cd0333904163ece8474a3811477ec86",
"assets/images/2.0x/ic_personal_info.png": "d23161e2c9d545e6516ccc7072473d65",
"assets/images/2.0x/ic_ssn_front.png": "8857971a6f684720f991a67e95d9cc04",
"assets/images/2.0x/ic_congratulations.png": "e940f7b267316222c8bc7a9c786b2259",
"assets/images/2.0x/ic_pay.png": "bc555b6668a980f49df10fc65b99ca6c",
"assets/images/2.0x/ic_call.png": "392c3d37170c8ce711d891513c768d2d",
"assets/images/2.0x/ic_confirm_pw.png": "9e4857c4216d55849b22e53602854db9",
"assets/images/2.0x/bg_ready_to_file.png": "999e24944357f7f5eaca449662436aa2",
"assets/images/2.0x/ic_attachment.png": "e1ea79bc66cc0555155ac1a7b92d7f45",
"assets/images/2.0x/ic_eye.png": "cb2befcec0df70d5f59f38a388857b2b",
"assets/images/ic_save_info.png": "d738a6473480d151e4ece01ba458181c",
"assets/images/ic_account_number.png": "3173bd0d778292b1b76bad61ab73e3d3",
"assets/images/ic_reset_password.png": "d6016dac300b744f8f634f95adcf1f8b",
"assets/images/ic_code.png": "17b50da0a7bb4f021402023569634b66",
"assets/images/ic_thumbnail_photo_item.png": "9aac8989ef297cac1a5ef46260287ff7",
"assets/images/splash_screen_logo.png": "3537f483f1116b0d3ece993994fef4b3",
"assets/images/ic_checkbox_unselected.png": "56c089742736fc0c514a125e053b3e2e",
"assets/images/ic_checkbox_selected.png": "368b9a6f0ff706ad6b5511f60d152aba",
"assets/images/img_files.png": "989564cdde8240ebb5bebec00bbc7d79",
"assets/images/ic_routing.png": "5a870c44e10f53df2dab8cf07602febf",
"assets/images/ic_error.png": "ae1ae19c7114252cdbeba6f068c4a994",
"assets/images/ic_donations.png": "2341d9304b0daecfec85797a078d510b",
"assets/images/ic_black_button.png": "2f03990ac7366f2906d79f66a7b97269",
"assets/images/ic_job_expenses.png": "870d1b409b024415f69501a1c0413e97",
"assets/images/ic_cross.png": "722d89ac6b866e2ad68b1a719882eddf",
"assets/images/ic_messages.png": "46ec209c502b106ea6f656ed858ddc4f",
"assets/images/ic_summary_bg.png": "78fc5aa476c88c4c2f6625a74236ffc0",
"assets/images/ic_additional_documents.png": "68fd70990cbc8daa624def481e3b9a98",
"assets/images/intro_professional.png": "b12048a87189d5a888573ea714c0dc1d",
"assets/images/ic_back_arrow.png": "3bdde30e02ee0b4983e30440fe33a493",
"assets/images/ic_schedule_c.png": "18494563c5bf55924dfee7db0ce71a99",
"assets/images/ic_mail.png": "9a0253b71a44d7099925a466aeeff944",
"assets/images/3.0x/ic_page_three.png": "1ed8b6370853a6eaf50abf77edf72113",
"assets/images/3.0x/ic_id_back.png": "9dfe4118b7a0267856c6f2ad54645cb6",
"assets/images/3.0x/ic_owned_home.png": "c9466daaac577d323e4a9bbaabcba22d",
"assets/images/3.0x/bg_scan_license.png": "f4b472637018c2513158236bb9b4e8de",
"assets/images/3.0x/ic_scenarios.png": "50aa163fa8a28747dc4a829a370ae6d2",
"assets/images/3.0x/ic_income.png": "564d658dd6bd2ba8cf3521aecf32341d",
"assets/images/3.0x/ic_page_two.png": "835f7211621faa2f306bfec4bd1f69a3",
"assets/images/3.0x/ic_eye_closed.png": "bb3151826bf84da9bbe63d76d6a40fee",
"assets/images/3.0x/ic_password.png": "8ca89040810074d66dd8ef75be98ab6f",
"assets/images/3.0x/ic_sample_ero_logo.png": "59ac284d30141de091c1e254f5ee64ee",
"assets/images/3.0x/ic_calendar.png": "7d3c74e5a7ac3a56b72e8fdb5648b68b",
"assets/images/3.0x/img_create_account.png": "35a2551fea6cf5a35ea26098deacbdcb",
"assets/images/3.0x/ic_card_frame.png": "8206e589a8ec802920ddf5897cd43c3f",
"assets/images/3.0x/ic_account_type.png": "8cc192ef04ebee34793f406673b6d431",
"assets/images/3.0x/ic_vehicle.png": "a045135310f1fd886d7406d0d4290bf0",
"assets/images/3.0x/ic_selfie.png": "da81d641393122a932238a3d22ca95ba",
"assets/images/3.0x/ic_close.png": "7d7100894fc6e0985c49138bee6a5846",
"assets/images/3.0x/ic_dropdown.png": "8706d48db25d8356d1e4b073ce582969",
"assets/images/3.0x/ic_base_summary.png": "3664e4204fb1dbdb1ca651813b2b8b6e",
"assets/images/3.0x/ic_office.png": "e7083d72ebda46880e677b68d0d4cfed",
"assets/images/3.0x/ic_office_info_bg.png": "7a690068f236da11df1449fec0033aef",
"assets/images/3.0x/ic_search_connect.png": "0fcfdbcb94ee795e861e17d97e49fbc4",
"assets/images/3.0x/ic_save_info.png": "a2525fde603e62a55e191ac34ff8e6c5",
"assets/images/3.0x/ic_account_number.png": "2a1f319ffb5d77480219112175de9213",
"assets/images/3.0x/ic_reset_password.png": "d6016dac300b744f8f634f95adcf1f8b",
"assets/images/3.0x/ic_code.png": "e53359ffe58ddd3435e1ce74d26e8d57",
"assets/images/3.0x/ic_thumbnail_photo_item.png": "6ef5bad354dcfcfa490a6db33f39656e",
"assets/images/3.0x/splash_screen_logo.png": "dc8afaae256af759f23919fedc965a9f",
"assets/images/3.0x/ic_checkbox_unselected.png": "b30de79b3cae3e78ac0a2d1619a07ff1",
"assets/images/3.0x/ic_checkbox_selected.png": "7294867dde00585d3b50b59983968661",
"assets/images/3.0x/ic_routing.png": "ba2ac405996a9019ca71b3aa8fb47d4c",
"assets/images/3.0x/ic_error.png": "42402ae9ca106c9c122b569764e738ad",
"assets/images/3.0x/ic_donations.png": "fe73588413ce176b2cf397440f2257bc",
"assets/images/3.0x/ic_black_button.png": "e96e970358b01a3ef7ef60d4f78e8ae7",
"assets/images/3.0x/ic_job_expenses.png": "d5cd4a241077908b1b2882b416b1f728",
"assets/images/3.0x/ic_cross.png": "3ed1af83c3a36693c99aa593afcaf0b8",
"assets/images/3.0x/ic_messages.png": "7c50bcd8ac3ef7a55c6b2769fda840d5",
"assets/images/3.0x/ic_additional_documents.png": "b7680a200aa91ac5852cf3ccea0f7a3c",
"assets/images/3.0x/intro_professional.png": "7e529efcc3ec9c2aebe8f23fae316c1f",
"assets/images/3.0x/ic_back_arrow.png": "30edcc853649648da73db4bceaed2cc1",
"assets/images/3.0x/ic_mail.png": "42248ae9441a386c9c3e8fcccd8e58c2",
"assets/images/3.0x/ic_share.png": "6d594a5c40c68d2f413d92f05b9a1ec4",
"assets/images/3.0x/ic_dependents.png": "d11cfd4f9f36d2a838b22eaf1f7b2b1c",
"assets/images/3.0x/ic_education.png": "58c6c1821ba6555e3863efe1455e15f8",
"assets/images/3.0x/ic_scan_license.png": "d6dffa95a988a3b385b2e58752485c27",
"assets/images/3.0x/bg_congratulations.png": "68fb233d8f411172b483dce42ea56c72",
"assets/images/3.0x/ic_taxpayer.png": "838847e487622c2a55b1d834bcdc7ed0",
"assets/images/3.0x/ic_vault.png": "6b54cc6e63114c1ec8436bda9739cba3",
"assets/images/3.0x/ic_bank_account.png": "b5fbeccbb27eafd0910c2954a464f0a9",
"assets/images/3.0x/ic_front_ssn.png": "14d2cd47dd03534eaa918032e1f1a026",
"assets/images/3.0x/main_background.png": "04a0bf80c1fbe923ab5a4ba70bc56b66",
"assets/images/3.0x/ic_settings.png": "b738798efac1d23bb2483b2a722f7aba",
"assets/images/3.0x/intro_convenient.png": "6dc80986ca86a8abfb8bccc84db96519",
"assets/images/3.0x/connect_logo.png": "a2aa3b3a923a3321cebffee3204f90ea",
"assets/images/3.0x/ic_medical_expenses.png": "63e056604c680f13a4e03cfd9478d0e2",
"assets/images/3.0x/ic_back.png": "020e282c58a0783ce6bb998fe4e55518",
"assets/images/3.0x/ic_ready_to_file.png": "0c29fb7c8ca016fb25a986f6bc08f68f",
"assets/images/3.0x/ic_spouse.png": "ff54fe00fc02973e0993e62a0ca736ba",
"assets/images/3.0x/intro_secure.png": "bccbd5458ca46296601aee7c902231a8",
"assets/images/3.0x/ic_chat.png": "152bb6faa3f85bc1ca7123300bb40384",
"assets/images/3.0x/ic_page_one.png": "2b2cb73a10868d42e066818bf571dbab",
"assets/images/3.0x/ic_breaks_checkmark.png": "0b6a133cfe4e96e98b2c53c3ed42e8b5",
"assets/images/3.0x/ic_email.png": "3cae0b81e93c69935d537eb8a09866aa",
"assets/images/3.0x/back_button.png": "7fbba539f384508bb720b6f8f432c461",
"assets/images/3.0x/ic_inperson.png": "dcbcf96b569e591b1619fd05cfb6ef93",
"assets/images/3.0x/bg_create_account.png": "d28502438676ef566d5714e0c16f0bde",
"assets/images/3.0x/ic_snapshot.png": "f06434fc0fa25429ada098db2de92c8d",
"assets/images/3.0x/ic_tax_breaks.png": "d76834eb7783e9876e812bfbb18a176c",
"assets/images/3.0x/ic_checkmark.png": "07b16d288a3b01191006972c0e4daf27",
"assets/images/3.0x/barcode_image.png": "ee66334709f7ecc36f15f31d5e03600d",
"assets/images/3.0x/ic_id_front.png": "1907061ee4f5c4e02f10859ce28465d8",
"assets/images/3.0x/ic_warning.png": "887607bfd68d9577b6ec35ec2762c244",
"assets/images/3.0x/ic_lets_started.png": "4369d6e06b1699b5822c13492263784f",
"assets/images/3.0x/ic_personal_info.png": "fd9f262c50e90aa8d81420a0c24f6b09",
"assets/images/3.0x/ic_ssn_front.png": "fbfb84c7fed31468a1fce7be4902c142",
"assets/images/3.0x/ic_congratulations.png": "5d35ef9afc7e4ef795a5e2b270223343",
"assets/images/3.0x/ic_pay.png": "ebcdcc4e47ef555f29afc45334dd2a9e",
"assets/images/3.0x/ic_call.png": "458515d34164083dc1916f249d680ebc",
"assets/images/3.0x/ic_confirm_pw.png": "c75194b13c8f361d1093de8dc6247f86",
"assets/images/3.0x/bg_ready_to_file.png": "cf48551e22c2f2fabfc8738f29a66902",
"assets/images/3.0x/ic_attachment.png": "d062b720815cb56a0700de97b41c46b9",
"assets/images/3.0x/ic_eye.png": "01703aaa89603d4ecdd0429a74cdf78f",
"assets/images/ic_share.png": "8fec76e12872a38e42d671573175f9b7",
"assets/images/ic_dependents.png": "5b79800b430d348c16cd115eeba044ab",
"assets/images/ic_radio_yes.png": "1dfffc3648fee971e4c6d3c4883ff0b8",
"assets/images/ic_education.png": "c0fc1bbd871343c56b4817246575f2a0",
"assets/images/ic_retirement.png": "ea9ab10bcc98e2159697e34888f7302a",
"assets/images/ic_empty.png": "43543407ed2c88dcab12fcacaa991418",
"assets/images/ic_scan_license.png": "e0a614727444de5a7455dd9d2e47593f",
"assets/images/ic_others.png": "f93e6d0bb31e75f009ae59c3a60d0846",
"assets/images/app_icon_adaptive.png": "361a8c089c20d2d389511a91d7a59ea5",
"assets/images/bg_congratulations.png": "e98b9048065f912cc86b9b5fbeb59da7",
"assets/images/ic_radio_no.png": "1035fa922300effeb6faad2b15769b46",
"assets/images/ic_taxpayer.png": "885057c46f2708ae7eeb2a6e4e565bd6",
"assets/images/ic_vault.png": "4220f9baa83f01e421c12d06e8f25ad2",
"assets/images/ic_bank_account.png": "ed7401e25ccca086051093c3ca68c05e",
"assets/images/ic_front_ssn.png": "9d8424cde3847d976fe556b66ebd3787",
"assets/images/main_background.png": "de0b31948803e70717ee5246d4a87ed4",
"assets/images/ic_settings.png": "4d5262caa75191bcdbed008a8c4e4886",
"assets/images/intro_convenient.png": "25d03418655426750eb9ec4493af9c31",
"assets/images/connect_logo.png": "da57f697c800e9d6944f031ede8c2335",
"assets/images/ic_medical_expenses.png": "f5bd2d440804a8e255ef8990eec4c518",
"assets/images/ic_back_simple.png": "edcd911e529f007b7c05763c89491411",
"assets/images/ic_back.png": "551f60239d2de0e94a8283cebd236273",
"assets/images/ic_ready_to_file.png": "d38e653bda3b9b3dd72801faab45afeb",
"assets/images/ic_spouse.png": "90ff295e23c04535f485d6a3e7d64e2c",
"assets/images/intro_secure.png": "68bd9f75c4a97a516c73c15326739f73",
"assets/images/ic_side_jobs.png": "685c85996d7b2a988becac1b4e5a0599",
"assets/images/ic_chat.png": "156446df6c3c752cb532a8d7cbe28358",
"assets/images/ic_page_one.png": "6ad1dfc0545a8cb061c9348f1c967007",
"assets/images/ic_breaks_checkmark.png": "84b123cdc0e295204f666a828601b8f0",
"assets/images/ic_email.png": "8099cf3d21c05c1f5133711a7e8d4219",
"assets/images/back_button.png": "346a3c623bb8355db6d1a9c43459f811",
"assets/images/ic_inperson.png": "97ced22ce1117bfb5b047936e0bbc530",
"assets/images/ic_unemployment.png": "35e0b7f54c7fbf6e2a82da821255b8bf",
"assets/images/bg_create_account.png": "f8746c552e6dbddb246589beb2d99503",
"assets/images/ic_snapshot.png": "f3719c027f36307404eb648c4e89952f",
"assets/images/ic_summary_bg@2x.png": "5c0cacd6ddb03e601c341339a42e3ddd",
"assets/images/ic_tax_breaks.png": "ab26dfb79f9842726972516c50561331",
"assets/images/ic_checkmark.png": "6fc361ec76868bf33286257354464d03",
"assets/images/barcode_image.png": "e7deca4511ef37e319907a7ba1663e19",
"assets/images/ic_id_front.png": "615531be67e0df0bb0887e1bfbf50746",
"assets/images/ic_warning.png": "d668febc4eb3e1d3b3aa78a6c39895f3",
"assets/images/ic_lets_started.png": "f0b5bc5c65b5e7ce15cfa04f9bc2c067",
"assets/images/ic_personal_info.png": "9fe88a9139dfd2d34f4eb9049a33b499",
"assets/images/ic_ssn_front.png": "7ff7aad6b336358a76b1bebdffc0d389",
"assets/images/ic_congratulations.png": "4db620a17246f68618523584796a7346",
"assets/images/ic_pay.png": "b8b6c5b39caaca943a2c0a3d48f2a48d",
"assets/images/ic_call.png": "8dd6372884fd8614febb31b89698ee53",
"assets/images/ic_confirm_pw.png": "cc80fe5a53c985fa84d35b6d49b21a6c",
"assets/images/bg_ready_to_file.png": "f535b4fc56310bba24de28447fa893bd",
"assets/images/ic_summary_bg@3x.png": "e51b9d21bf03c8c58915d61cb2f537c6",
"assets/images/ic_attachment.png": "64e26f7acdd5fb082bf9c3574ba411bb",
"assets/images/ic_eye.png": "3fc58982b62d413827f51f4325988ac8",
"assets/AssetManifest.json": "ab47dd4eef2fa5c2499e6f6146157af2",
"assets/NOTICES": "219edc7f52a024cbb44bd3fc9bcac712",
"assets/FontManifest.json": "9291ee3befd4490c66b1cba3d4ac378f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/fluttertoast/assets/toastify.js": "8f5ac78dd0b9b5c9959ea1ade77f68ae",
"assets/packages/fluttertoast/assets/toastify.css": "8beb4c67569fb90146861e66d94163d7",
"assets/i18n/en.json": "7b3a5e86d20d4d8ed44c5959b1fa9f54",
"assets/i18n/es.json": "fbc40d6a933857912d87f8167e100a49",
"assets/fonts/OpenSans-SemiBold.ttf": "e1c83f9474e0cc1d84a13c6d1ddf3ca5",
"assets/fonts/OpenSans-Light.ttf": "61b7c96669aa7079729fe33c0a4e8aa0",
"assets/fonts/OpenSans-ExtraBold.ttf": "49f89e34d03233b1f27788f75df7a40a",
"assets/fonts/helvetica-bold.ttf": "0575d7da3dfafe0b95ef267746af68cc",
"assets/fonts/OpenSans-Bold.ttf": "f5331cb6372b6c0d8baf2dd7e200498c",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/OpenSans-Regular.ttf": "e75aca08f1e92fc21a75db46ee8ab751"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
