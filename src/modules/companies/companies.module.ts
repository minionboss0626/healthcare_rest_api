import { Module } from '@nestjs/common';
import { CompaniesController } from './companies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { CompaniesService } from './companies.service';
import { CompanyPhoto } from './entities/companyPhoto.entity';
import { CompanyLocation } from './entities/companyLocation.entity';
import { AuthModule } from '../auth/auth.module';
import { S3ManagerService } from 'src/common/services/s3-manager.service';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([Company, CompanyPhoto, CompanyLocation]),
  ],
  providers: [CompaniesService, S3ManagerService],
  controllers: [CompaniesController],
  exports: [CompaniesService],
})
export class CompaniesModule {}
