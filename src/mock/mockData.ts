export interface Driver {
  id: string;
  name: string;
  gamertag: string;
  role: 'Admin' | 'Piloto';
  avatar?: string;
}

export type CarClass = 'Hypercar' | 'LMP2' | 'LMP3' | 'GTE' | 'LMGT3';

export interface Car {
  id: string;
  name: string;
  class: CarClass;
  image?: string;
}

export interface Track {
  id: string;
  name: string;
  country: string;
  length: string;
}

export interface Setup {
  id: string;
  trackId: string;
  carId: string;
  driverId: string;
  name: string;
  filename: string;
  date: string;
  downloads: number;
}

export interface LapTime {
  id: string;
  driverId: string;
  carId: string;
  trackId: string;
  time: string; // Format: 1:23.456
  sector1?: string;
  sector2?: string;
  sector3?: string;
  date: string;
  setupUrl?: string; // Mock link
  notes?: string;
}

export interface ReferenceLap {
  track: string;
  carClass: string;
  time100: string; // Alien
  time101: string; // Competitive
  time102: string; // Good
  time103: string; // Midpack
  time105: string; // Tail-ender
  time107: string; // Offline
  fastestCar: string;
}

export const MOCK_REFERENCE_LAPS = [
  // LMGT3
  { track: "Bahrain (wec)", carClass: "LMGT3", time100: "1:58.73", time101: "1:59.32", time102: "2:00.51", time103: "2:01.71", time105: "2:04.09", time107: "2:06.48", fastestCar: "Aston Martin V8 Vantage EVO" },
  { track: "Bahrain (endurance)", carClass: "LMGT3", time100: "2:26.27", time101: "2:27.00", time102: "2:28.47", time103: "2:29.94", time105: "2:32.88", time107: "2:35.82", fastestCar: "Lamborghini Huracan EVO II" },
  { track: "Bahrain (outer)", carClass: "LMGT3", time100: "1:12.35", time101: "1:12.71", time102: "1:13.44", time103: "1:14.16", time105: "1:15.62", time107: "1:17.07", fastestCar: "Lamborghini Huracan EVO II" },
  { track: "Bahrain (paddock)", carClass: "LMGT3", time100: "1:20.97", time101: "1:21.38", time102: "1:22.19", time103: "1:23.00", time105: "1:24.63", time107: "1:26.26", fastestCar: "Lamborghini Huracan EVO II" },
  { track: "Circuit de la Sarthe", carClass: "LMGT3", time100: "3:55.31", time101: "3:56.48", time102: "3:58.85", time103: "4:01.21", time105: "4:05.94", time107: "4:10.67", fastestCar: "McLaren 720s EVO" },
  { track: "Circuit de la Sarthe (straight)", carClass: "LMGT3", time100: "3:39.66", time101: "3:40.75", time102: "3:42.96", time103: "3:45.17", time105: "3:49.58", time107: "3:54.00", fastestCar: "McLaren 720s EVO" },
  { track: "COTA", carClass: "LMGT3", time100: "2:05.72", time101: "2:06.34", time102: "2:07.61", time103: "2:08.87", time105: "2:11.40", time107: "2:13.92", fastestCar: "Porsche 992" },
  { track: "COTA (national)", carClass: "LMGT3", time100: "1:30.38", time101: "1:30.84", time102: "1:31.75", time103: "1:32.65", time105: "1:34.47", time107: "1:36.29", fastestCar: "Porsche 992" },
  { track: "Fuji (chicane)", carClass: "LMGT3", time100: "1:39.86", time101: "1:40.36", time102: "1:41.36", time103: "1:42.37", time105: "1:44.37", time107: "1:46.38", fastestCar: "Lamborghini Huracan EVO II" },
  { track: "Fuji (classic)", carClass: "LMGT3", time100: "1:36.00", time101: "1:36.48", time102: "1:37.45", time103: "1:38.41", time105: "1:40.34", time107: "1:42.27", fastestCar: "Lamborghini Huracan EVO II" },
  { track: "Imola", carClass: "LMGT3", time100: "1:41.81", time101: "1:42.32", time102: "1:43.34", time103: "1:44.36", time105: "1:46.41", time107: "1:48.46", fastestCar: "Lamborghini Huracan EVO II" },
  { track: "Interlagos", carClass: "LMGT3", time100: "1:33.65", time101: "1:34.12", time102: "1:35.06", time103: "1:36.00", time105: "1:37.89", time107: "1:39.77", fastestCar: "Lamborghini Huracan EVO II" },
  { track: "Monza", carClass: "LMGT3", time100: "1:48.65", time101: "1:49.20", time102: "1:50.29", time103: "1:51.38", time105: "1:53.56", time107: "1:55.75", fastestCar: "McLaren 720s EVO" },
  { track: "Monza (curvagrande)", carClass: "LMGT3", time100: "1:39.07", time101: "1:39.56", time102: "1:40.56", time103: "1:41.55", time105: "1:43.55", time107: "1:45.54", fastestCar: "McLaren 720s EVO" },
  { track: "Paul Ricard", carClass: "LMGT3", time100: "2:03.53", time101: "2:04.14", time102: "2:05.39", time103: "2:06.63", time105: "2:09.11", time107: "2:11.59", fastestCar: "Mercedes-AMG" },
  { track: "Portimao", carClass: "LMGT3", time100: "1:43.14", time101: "1:43.66", time102: "1:44.69", time103: "1:45.73", time105: "1:47.80", time107: "1:49.88", fastestCar: "Porsche 992" },
  { track: "Qatar", carClass: "LMGT3", time100: "1:54.22", time101: "1:54.79", time102: "1:55.94", time103: "1:57.09", time105: "1:59.38", time107: "2:01.68", fastestCar: "Lamborghini Huracan EVO II" },
  { track: "Qatar (short)", carClass: "LMGT3", time100: "1:09.30", time101: "1:09.64", time102: "1:10.34", time103: "1:11.04", time105: "1:12.43", time107: "1:13.82", fastestCar: "Ferrari 296" },
  { track: "Silverstone", carClass: "LMGT3", time100: "1:57.99", time101: "1:58.58", time102: "1:59.77", time103: "2:00.95", time105: "2:03.32", time107: "2:05.69", fastestCar: "Porsche 992" },
  { track: "Sebring", carClass: "LMGT3", time100: "2:00.18", time101: "2:00.79", time102: "2:01.99", time103: "2:03.20", time105: "2:05.62", time107: "2:08.03", fastestCar: "Lamborghini Huracan EVO II" },
  { track: "Sebring (school)", carClass: "LMGT3", time100: "1:03.13", time101: "1:03.45", time102: "1:04.08", time103: "1:04.71", time105: "1:05.98", time107: "1:07.25", fastestCar: "Corvette Z06" },
  { track: "Spa", carClass: "LMGT3", time100: "2:17.31", time101: "2:17.99", time102: "2:19.37", time103: "2:20.75", time105: "2:23.51", time107: "2:26.27", fastestCar: "Lamborghini Huracan EVO II" },

  // Hypercar (LMH)
  { track: "Bahrain (wec)", carClass: "Hypercar", time100: "1:43.99", time101: "1:44.51", time102: "1:45.56", time103: "1:46.60", time105: "1:48.69", time107: "1:50.78", fastestCar: "Lamborghini SC63" },
  { track: "Bahrain (endurance)", carClass: "Hypercar", time100: "2:08.62", time101: "2:09.26", time102: "2:10.55", time103: "2:11.84", time105: "2:14.43", time107: "2:17.01", fastestCar: "BMW M Hybrid V8" },
  { track: "Bahrain (outer)", carClass: "Hypercar", time100: "1:03.27", time101: "1:03.58", time102: "1:04.22", time103: "1:04.85", time105: "1:06.12", time107: "1:07.40", fastestCar: "Aston Martin Valkyrie" },
  { track: "Bahrain (paddock)", carClass: "Hypercar", time100: "1:10.74", time101: "1:11.09", time102: "1:11.80", time103: "1:12.51", time105: "1:13.93", time107: "1:15.36", fastestCar: "Aston Martin Valkyrie" },
  { track: "Circuit de la Sarthe", carClass: "Hypercar", time100: "3:21.45", time101: "3:22.46", time102: "3:24.48", time103: "3:26.50", time105: "3:30.55", time107: "3:34.60", fastestCar: "Porsche 963" },
  { track: "Circuit de la Sarthe (straight)", carClass: "Hypercar", time100: "3:08.10", time101: "3:09.04", time102: "3:10.93", time103: "3:12.82", time105: "3:16.60", time107: "3:20.38", fastestCar: "Porsche 963" },
  { track: "COTA", carClass: "Hypercar", time100: "1:51.04", time101: "1:51.60", time102: "1:52.71", time103: "1:53.83", time105: "1:56.06", time107: "1:58.29", fastestCar: "Porsche 963" },
  { track: "COTA (national)", carClass: "Hypercar", time100: "1:20.16", time101: "1:20.56", time102: "1:21.37", time103: "1:22.17", time105: "1:23.79", time107: "1:25.40", fastestCar: "Toyota GR010" },
  { track: "Fuji (chicane)", carClass: "Hypercar", time100: "1:27.66", time101: "1:28.10", time102: "1:28.98", time103: "1:29.86", time105: "1:31.62", time107: "1:33.39", fastestCar: "BMW M Hybrid V8" },
  { track: "Fuji (classic)", carClass: "Hypercar", time100: "1:23.75", time101: "1:24.17", time102: "1:25.01", time103: "1:25.86", time105: "1:27.54", time107: "1:29.22", fastestCar: "Porsche 963" },
  { track: "Imola", carClass: "Hypercar", time100: "1:28.68", time101: "1:29.13", time102: "1:30.02", time103: "1:30.91", time105: "1:32.69", time107: "1:34.47", fastestCar: "Aston Martin Valkyrie" },
  { track: "Interlagos", carClass: "Hypercar", time100: "1:22.54", time101: "1:22.95", time102: "1:23.78", time103: "1:24.61", time105: "1:26.27", time107: "1:27.93", fastestCar: "Aston Martin Valkyrie" },
  { track: "Monza", carClass: "Hypercar", time100: "1:33.82", time101: "1:34.29", time102: "1:35.24", time103: "1:36.18", time105: "1:38.07", time107: "1:39.95", fastestCar: "BMW M Hybrid V8" },
  { track: "Monza (curvagrande)", carClass: "Hypercar", time100: "1:25.21", time101: "1:25.64", time102: "1:26.50", time103: "1:27.35", time105: "1:29.07", time107: "1:30.78", fastestCar: "Porsche 963" },
  { track: "Paul Ricard", carClass: "Hypercar", time100: "1:47.41", time101: "1:47.94", time102: "1:49.02", time103: "1:50.10", time105: "1:52.26", time107: "1:54.42", fastestCar: "Aston Martin Valkyrie" },
  { track: "Portimao", carClass: "Hypercar", time100: "1:30.55", time101: "1:31.01", time102: "1:31.92", time103: "1:32.83", time105: "1:34.65", time107: "1:36.47", fastestCar: "Ferrari 499P" },
  { track: "Qatar", carClass: "Hypercar", time100: "1:38.17", time101: "1:38.66", time102: "1:39.64", time103: "1:40.63", time105: "1:42.60", time107: "1:44.58", fastestCar: "Alpine A424" },
  { track: "Qatar (short)", carClass: "Hypercar", time100: "0:58.56", time101: "0:58.85", time102: "0:59.44", time103: "1:00.03", time105: "1:01.20", time107: "1:02.38", fastestCar: "Alpine A424" },
  { track: "Silverstone", carClass: "Hypercar", time100: "1:41.27", time101: "1:41.78", time102: "1:42.80", time103: "1:43.82", time105: "1:45.85", time107: "1:47.89", fastestCar: "Aston Martin Valkyrie" },
  { track: "Sebring", carClass: "Hypercar", time100: "1:44.53", time101: "1:45.05", time102: "1:46.10", time103: "1:47.15", time105: "1:49.25", time107: "1:51.35", fastestCar: "Peugeot 9x8 Evo" },
  { track: "Sebring (school)", carClass: "Hypercar", time100: "0:54.50", time101: "0:54.77", time102: "0:55.32", time103: "0:55.86", time105: "0:56.96", time107: "0:58.06", fastestCar: "Peugeot 9x8 Evo" },
  { track: "Spa", carClass: "Hypercar", time100: "1:58.93", time101: "1:59.52", time102: "2:00.72", time103: "2:01.91", time105: "2:04.30", time107: "2:06.69", fastestCar: "Aston Martin Valkyrie" },

  // LMP3
  { track: "Bahrain (wec)", carClass: "LMP3", time100: "1:54.03", time101: "1:54.60", time102: "1:55.75", time103: "1:56.89", time105: "1:59.18", time107: "2:01.48", fastestCar: "Ligier JS P325" },
  { track: "Bahrain (endurance)", carClass: "LMP3", time100: "2:19.36", time101: "2:20.06", time102: "2:21.46", time103: "2:22.86", time105: "2:25.66", time107: "2:28.46", fastestCar: "Ligier JS P325" },
  { track: "Bahrain (outer)", carClass: "LMP3", time100: "1:09.52", time101: "1:09.87", time102: "1:10.56", time103: "1:11.26", time105: "1:12.66", time107: "1:14.06", fastestCar: "Ligier JS P325" },
  { track: "Bahrain (paddock)", carClass: "LMP3", time100: "1:17.32", time101: "1:17.71", time102: "1:18.48", time103: "1:19.26", time105: "1:20.81", time107: "1:22.37", fastestCar: "Ligier JS P325" },
  { track: "Circuit de la Sarthe", carClass: "LMP3", time100: "3:44.81", time101: "3:45.94", time102: "3:48.20", time103: "3:50.46", time105: "3:54.98", time107: "3:59.50", fastestCar: "Ligier JS P325" },
  { track: "Circuit de la Sarthe (straight)", carClass: "LMP3", time100: "3:30.20", time101: "3:31.25", time102: "3:33.36", time103: "3:35.47", time105: "3:39.70", time107: "3:43.92", fastestCar: "Ligier JS P325" },
  { track: "COTA", carClass: "LMP3", time100: "2:00.36", time101: "2:00.97", time102: "2:02.18", time103: "2:03.39", time105: "2:05.81", time107: "2:08.22", fastestCar: "Ligier JS P325" },
  { track: "COTA (national)", carClass: "LMP3", time100: "1:26.17", time101: "1:26.60", time102: "1:27.47", time103: "1:28.33", time105: "1:30.06", time107: "1:31.80", fastestCar: "Ligier JS P325" },
  { track: "Fuji (chicane)", carClass: "LMP3", time100: "1:35.13", time101: "1:35.60", time102: "1:36.56", time103: "1:37.51", time105: "1:39.42", time107: "1:41.34", fastestCar: "Ligier JS P325" },
  { track: "Fuji (classic)", carClass: "LMP3", time100: "1:31.19", time101: "1:31.64", time102: "1:32.56", time103: "1:33.47", time105: "1:35.31", time107: "1:37.14", fastestCar: "Ligier JS P325" },
  { track: "Imola", carClass: "LMP3", time100: "1:37.70", time101: "1:38.19", time102: "1:39.17", time103: "1:40.16", time105: "1:42.12", time107: "1:44.08", fastestCar: "Ligier JS P325" },
  { track: "Interlagos", carClass: "LMP3", time100: "1:29.22", time101: "1:29.67", time102: "1:30.57", time103: "1:31.46", time105: "1:33.26", time107: "1:35.05", fastestCar: "Ginetta G61-LT-P3 EVO" },
  { track: "Monza", carClass: "LMP3", time100: "1:43.88", time101: "1:44.40", time102: "1:45.44", time103: "1:46.48", time105: "1:48.57", time107: "1:50.66", fastestCar: "Ligier JS P325" },
  { track: "Monza (curvagrande)", carClass: "LMP3", time100: "1:34.56", time101: "1:35.03", time102: "1:35.98", time103: "1:36.93", time105: "1:38.83", time107: "1:40.73", fastestCar: "Ginetta G61-LT-P3 EVO" },
  { track: "Paul Ricard", carClass: "LMP3", time100: "1:57.13", time101: "1:57.72", time102: "1:58.89", time103: "2:00.07", time105: "2:02.43", time107: "2:04.78", fastestCar: "Ligier JS P325" },
  { track: "Portimao", carClass: "LMP3", time100: "1:38.51", time101: "1:39.00", time102: "1:39.99", time103: "1:40.98", time105: "1:42.96", time107: "1:44.94", fastestCar: "Ligier JS P325" },
  { track: "Qatar", carClass: "LMP3", time100: "1:46.99", time101: "1:47.53", time102: "1:48.60", time103: "1:49.68", time105: "1:51.83", time107: "1:53.98", fastestCar: "Ligier JS P325" },
  { track: "Qatar (short)", carClass: "LMP3", time100: "1:04.96", time101: "1:05.28", time102: "1:05.94", time103: "1:06.59", time105: "1:07.89", time107: "1:09.20", fastestCar: "Ligier JS P325" },
  { track: "Silverstone", carClass: "LMP3", time100: "1:51.15", time101: "1:51.71", time102: "1:52.82", time103: "1:53.94", time105: "1:56.17", time107: "1:58.41", fastestCar: "Ligier JS P325" },
  { track: "Sebring", carClass: "LMP3", time100: "1:54.50", time101: "1:55.07", time102: "1:56.22", time103: "1:57.37", time105: "1:59.67", time107: "2:01.97", fastestCar: "Ligier JS P325" },
  { track: "Sebring (school)", carClass: "LMP3", time100: "0:59.23", time101: "0:59.53", time102: "1:00.12", time103: "1:00.72", time105: "1:01.91", time107: "1:03.10", fastestCar: "Ligier JS P325" },
  { track: "Spa", carClass: "LMP3", time100: "2:10.69", time101: "2:11.35", time102: "2:12.66", time103: "2:13.97", time105: "2:16.60", time107: "2:19.23", fastestCar: "Ligier JS P325" },

  // LMP2 (ELMS)
  { track: "Bahrain (wec)", carClass: "LMP2", time100: "1:46.32", time101: "1:46.85", time102: "1:47.92", time103: "1:48.99", time105: "1:51.12", time107: "1:53.26", fastestCar: "Oreca 07 Gibson" },
  { track: "Bahrain (endurance)", carClass: "LMP2", time100: "2:11.54", time101: "2:12.20", time102: "2:13.52", time103: "2:14.84", time105: "2:17.48", time107: "2:20.13", fastestCar: "Oreca 07 Gibson" },
  { track: "Bahrain (outer)", carClass: "LMP2", time100: "1:04.99", time101: "1:05.32", time102: "1:05.97", time103: "1:06.62", time105: "1:07.93", time107: "1:09.24", fastestCar: "Oreca 07 Gibson" },
  { track: "Bahrain (paddock)", carClass: "LMP2", time100: "1:12.68", time101: "1:13.04", time102: "1:13.77", time103: "1:14.50", time105: "1:15.97", time107: "1:17.43", fastestCar: "Oreca 07 Gibson" },
  { track: "Circuit de la Sarthe", carClass: "LMP2", time100: "3:26.83", time101: "3:27.86", time102: "3:29.94", time103: "3:32.02", time105: "3:36.18", time107: "3:40.33", fastestCar: "Oreca 07 Gibson" },
  { track: "Circuit de la Sarthe (straight)", carClass: "LMP2", time100: "3:13.37", time101: "3:14.34", time102: "3:16.28", time103: "3:18.23", time105: "3:22.12", time107: "3:26.00", fastestCar: "Oreca 07 Gibson" },
  { track: "COTA", carClass: "LMP2", time100: "1:52.81", time101: "1:53.37", time102: "1:54.51", time103: "1:55.64", time105: "1:57.90", time107: "2:00.16", fastestCar: "Oreca 07 Gibson" },
  { track: "COTA (national)", carClass: "LMP2", time100: "1:21.36", time101: "1:21.77", time102: "1:22.58", time103: "1:23.40", time105: "1:25.03", time107: "1:26.66", fastestCar: "Oreca 07 Gibson" },
  { track: "Fuji (chicane)", carClass: "LMP2", time100: "1:29.35", time101: "1:29.79", time102: "1:30.69", time103: "1:31.58", time105: "1:33.37", time107: "1:35.15", fastestCar: "Oreca 07 Gibson" },
  { track: "Fuji (classic)", carClass: "LMP2", time100: "1:25.43", time101: "1:25.86", time102: "1:26.71", time103: "1:27.57", time105: "1:29.28", time107: "1:30.99", fastestCar: "Oreca 07 Gibson" },
  { track: "Imola", carClass: "LMP2", time100: "1:31.42", time101: "1:31.87", time102: "1:32.79", time103: "1:33.71", time105: "1:35.54", time107: "1:37.38", fastestCar: "Oreca 07 Gibson" },
  { track: "Interlagos", carClass: "LMP2", time100: "1:24.46", time101: "1:24.88", time102: "1:25.73", time103: "1:26.58", time105: "1:28.28", time107: "1:29.98", fastestCar: "Oreca 07 Gibson" },
  { track: "Monza", carClass: "LMP2", time100: "1:36.75", time101: "1:37.23", time102: "1:38.20", time103: "1:39.17", time105: "1:41.12", time107: "1:43.06", fastestCar: "Oreca 07 Gibson" },
  { track: "Monza (curvagrande)", carClass: "LMP2", time100: "1:27.32", time101: "1:27.76", time102: "1:28.64", time103: "1:29.51", time105: "1:31.27", time107: "1:33.02", fastestCar: "Oreca 07 Gibson" },
  { track: "Paul Ricard", carClass: "LMP2", time100: "1:50.08", time101: "1:50.63", time102: "1:51.74", time103: "1:52.84", time105: "1:55.05", time107: "1:57.26", fastestCar: "Oreca 07 Gibson" },
  { track: "Portimao", carClass: "LMP2", time100: "1:32.61", time101: "1:33.07", time102: "1:34.00", time103: "1:34.93", time105: "1:36.79", time107: "1:38.65", fastestCar: "Oreca 07 Gibson" },
  { track: "Qatar", carClass: "LMP2", time100: "1:40.83", time101: "1:41.33", time102: "1:42.34", time103: "1:43.35", time105: "1:45.37", time107: "1:47.40", fastestCar: "Oreca 07 Gibson" },
  { track: "Qatar (short)", carClass: "LMP2", time100: "1:00.67", time101: "1:00.97", time102: "1:01.58", time103: "1:02.19", time105: "1:03.40", time107: "1:04.62", fastestCar: "Oreca 07 Gibson" },
  { track: "Silverstone", carClass: "LMP2", time100: "1:44.22", time101: "1:44.75", time102: "1:45.79", time103: "1:46.84", time105: "1:48.94", time107: "1:51.03", fastestCar: "Oreca 07 Gibson" },
  { track: "Sebring", carClass: "LMP2", time100: "1:47.38", time101: "1:47.92", time102: "1:48.99", time103: "1:50.07", time105: "1:52.22", time107: "1:54.37", fastestCar: "Oreca 07 Gibson" },
  { track: "Sebring (school)", carClass: "LMP2", time100: "0:56.24", time101: "0:56.52", time102: "0:57.08", time103: "0:57.65", time105: "0:58.77", time107: "0:59.90", fastestCar: "Oreca 07 Gibson" },
  { track: "Spa", carClass: "LMP2", time100: "2:02.05", time101: "2:02.66", time102: "2:03.88", time103: "2:05.11", time105: "2:07.56", time107: "2:10.01", fastestCar: "Oreca 07 Gibson" },
];

export const MOCK_DRIVERS= [
  { id: '1', name: 'Alex Fox', gamertag: 'RedFox_01', role: 'Admin', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex' },
  { id: '2', name: 'Sam Speed', gamertag: 'SpeedDemon_99', role: 'Piloto', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sam' },
  { id: '3', name: 'Max Apex', gamertag: 'ApexHunter', role: 'Piloto', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Max' },
];

export const MOCK_CARS = [
  // Hypercars
  { id: 'c1', name: 'Ferrari 499P', class: 'Hypercar' },
  { id: 'c2', name: 'Toyota GR010 - Hybrid', class: 'Hypercar' },
  { id: 'c3', name: 'Porsche 963', class: 'Hypercar' },
  { id: 'c4', name: 'Cadillac V-Series.R', class: 'Hypercar' },
  { id: 'c5', name: 'Peugeot 9X8', class: 'Hypercar' },
  { id: 'c6', name: 'BMW M Hybrid V8', class: 'Hypercar' },
  { id: 'c7', name: 'Alpine A424 (DLC)', class: 'Hypercar' },
  { id: 'c8', name: 'Aston Martin Valkyrie AMR LMH', class: 'Hypercar' },
  { id: 'c9', name: 'Glickenhaus SCG 007', class: 'Hypercar' },
  { id: 'c10', name: 'Vanwall Vandervell 680', class: 'Hypercar' },
  { id: 'c11', name: 'Isotta Fraschini Tipo 6-C (DLC)', class: 'Hypercar' },
  { id: 'c12', name: 'Lamborghini SC63 (DLC)', class: 'Hypercar' },

  // LMGT3
  { id: 'c13', name: 'Aston Martin Vantage AMR', class: 'LMGT3' },
  { id: 'c14', name: 'BMW M4', class: 'LMGT3' },
  { id: 'c15', name: 'Chevrolet Corvette Z06', class: 'LMGT3' },
  { id: 'c16', name: 'Ferrari 296', class: 'LMGT3' },
  { id: 'c17', name: 'Ford Mustang', class: 'LMGT3' },
  { id: 'c18', name: 'Lamborghini Huracán Evo 2', class: 'LMGT3' },
  { id: 'c19', name: 'Lexus RC F', class: 'LMGT3' },
  { id: 'c20', name: 'McLaren 720S Evo', class: 'LMGT3' },
  { id: 'c21', name: 'Mercedes-AMG GT3 Evo', class: 'LMGT3' },

  // LMP2
  { id: 'c22', name: 'Oreca 07 Gibson', class: 'LMP2' },
  { id: 'c23', name: 'Alpine A470', class: 'LMP2' },

  // LMP3
  { id: 'c24', name: 'Ligier JS P325', class: 'LMP3' },
  { id: 'c25', name: 'Ginetta G61-LT-P3 Evo', class: 'LMP3' },

  // GTE
  { id: 'c26', name: 'Aston Martin Vantage AMR', class: 'GTE' },
  { id: 'c27', name: 'Corvette C8.R', class: 'GTE' },
  { id: 'c28', name: 'Ferrari 488 GTE Evo', class: 'GTE' },
  { id: 'c29', name: 'Porsche 911 RSR-19', class: 'GTE' },
];

export const MOCK_TRACKS = [
  { id: 't1', name: 'Circuit de la Sarthe (Le Mans)', country: 'France', length: '13.626 km' },
  { id: 't2', name: 'Spa-Francorchamps', country: 'Belgium', length: '7.004 km' },
  { id: 't3', name: 'Monza', country: 'Italy', length: '5.793 km' },
  { id: 't4', name: 'Fuji Speedway', country: 'Japan', length: '4.563 km' },
  { id: 't5', name: 'Bahrain International Circuit', country: 'Bahrain', length: '5.412 km' },
  { id: 't6', name: 'Sebring International Raceway', country: 'USA', length: '6.019 km' },
  { id: 't7', name: 'Portimão', country: 'Portugal', length: '4.653 km' },
];

export const MOCK_LAPTIMES = [
  { 
    id: 'l1', 
    driverId: '1', 
    carId: 'c1', 
    trackId: 't1', 
    time: '3:24.150', 
    date: '2025-02-01', 
    notes: 'Volta de classificação, pouco nublado',
    setupUrl: '#' 
  },
  { 
    id: 'l2', 
    driverId: '2', 
    carId: 'c3', 
    trackId: 't1', 
    time: '3:25.800', 
    date: '2025-02-02', 
    notes: 'Ritmo de corrida',
    setupUrl: '#' 
  },
  { 
    id: 'l3', 
    driverId: '1', 
    carId: 'c28', 
    trackId: 't2', 
    time: '2:14.500', 
    date: '2025-01-28', 
    notes: 'Testando novo setup agressivo',
    setupUrl: '#' 
  },
  {
    id: 'l4', 
    driverId: '3', 
    carId: 'c22', 
    trackId: 't3', 
    time: '1:39.200', 
    date: '2025-02-03', 
    notes: 'Setup de baixa pressão aerodinâmica',
    setupUrl: '#'
  }
];

export const MOCK_SETUPS= [
  {
    id: 's1',
    trackId: 't1',
    carId: 'c1',
    driverId: '1',
    name: 'Qualy - Le Mans - 3:24',
    filename: 'ferrari_499p_lm_qualy_v1.json',
    date: '2025-02-01',
    downloads: 12
  },
  {
    id: 's2',
    trackId: 't3',
    carId: 'c22',
    driverId: '3',
    name: 'Monza Race Pace',
    filename: 'oreca07_monza_race.json',
    date: '2025-02-03',
    downloads: 5
  }
];
