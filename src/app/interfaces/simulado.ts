import { Time } from '@angular/common';

export interface Simulado {
  nome?: string;
  orgao?: string;
  numero?: string;
  questoes?: string;
  qstc?: string;
  qste?: string;
  qstb?: string;
  media?: string;
  pontliquida?: string;
  data?: Date;
  tempo?: Time;
}
