-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 06-Dez-2020 às 04:35
-- Versão do servidor: 10.4.8-MariaDB
-- versão do PHP: 7.2.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `db-challenge`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `domains`
--

CREATE TABLE `domains` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `ip` varchar(15) NOT NULL,
  `whois` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ;

--
-- Extraindo dados da tabela `domains`
--

INSERT INTO `domains` (`id`, `name`, `ip`, `whois`, `hostedat`) VALUES
(1, 'umbler.com', '187.84.237.146', '{\n  \"domainName\": \"UMBLER.COM\",\n  \"registryDomainId\": \"1805958813_DOMAIN_COM-VRSN\",\n  \"registrarWhoisServer\": \"whois.publicdomainregistry.com\",\n  \"registrarUrl\": \"www.publicdomainregistry.com\",\n  \"updatedDate\": \"2019-04-16T14:20:33Z\",\n  \"creationDate\": \"2013-06-03T20:42:15Z\",\n  \"registrarRegistrationExpirationDate\": \"2027-06-03T20:42:15Z\",\n  \"registrar\": \"PDR Ltd. d/b/a PublicDomainRegistry.com\",\n  \"registrarIanaId\": \"303\",\n  \"domainStatus\": \"clientTransferProhibited https://icann.org/epp#clientTransferProhibited\",\n  \"registryRegistrantId\": \"Not Available From Registry\",\n  \"registrantName\": \"Flavio Cardoso\",\n  \"registrantOrganization\": \"Umbler\",\n  \"registrantStreet\": \"Av Dorival Candido Luz de Oliveira, 1890, 3 andar\",\n  \"registrantCity\": \"Gravatai\",\n  \"registrantStateProvince\": \"Rio Grande do Sul\",\n  \"registrantPostalCode\": \"94030000\",\n  \"registrantCountry\": \"BR\",\n  \"registrantPhone\": \"+55.5140620909\",\n  \"registrantEmail\": \"flavio@umbler.com\",\n  \"registryAdminId\": \"Not Available From Registry\",\n  \"adminName\": \"Flavio Cardoso\",\n  \"adminOrganization\": \"Umbler\",\n  \"adminStreet\": \"Av Dorival Candido Luz de Oliveira, 1890, 3 andar\",\n  \"adminCity\": \"Gravatai\",\n  \"adminStateProvince\": \"Rio Grande do Sul\",\n  \"adminPostalCode\": \"94030000\",\n  \"adminCountry\": \"BR\",\n  \"adminPhone\": \"+55.5140620909\",\n  \"adminEmail\": \"flavio@umbler.com\",\n  \"registryTechId\": \"Not Available From Registry\",\n  \"techName\": \"Flavio Cardoso\",\n  \"techOrganization\": \"Umbler\",\n  \"techStreet\": \"Av Dorival Candido Luz de Oliveira, 1890, 3 andar\",\n  \"techCity\": \"Gravatai\",\n  \"techStateProvince\": \"Rio Grande do Sul\",\n  \"techPostalCode\": \"94030000\",\n  \"techCountry\": \"BR\",\n  \"techPhone\": \"+55.5140620909\",\n  \"techEmail\": \"flavio@umbler.com\",\n  \"nameServer\": \"ns1.umbler.com ns2.umbler.com ns3.umbler.com ns4.umbler.com\",\n  \"dnssec\": \"Unsigned\",\n  \"registrarAbuseContactEmail\": \"abuse-contact@publicdomainregistry.com\",\n  \"registrarAbuseContactPhone\": \"+1.2013775952\",\n  \"urlOfTheIcannWhoisDataProblemReportingSystem\": \"http://wdprs.internic.net/\",\n  \"lastUpdateOfWhoisDatabase\": \"2020-12-06T03:08:10Z <<<\",\n  \"registrationServiceProvidedBy\": \"REDEHOST\"\n}', 'Locaweb'),
(2, 'google.com', '216.58.202.174', '{\n  \"domainName\": \"google.com\",\n  \"registryDomainId\": \"2138514_DOMAIN_COM-VRSN\",\n  \"registrarWhoisServer\": \"whois.markmonitor.com\",\n  \"registrarUrl\": \"http://www.markmonitor.com\",\n  \"updatedDate\": \"2019-09-09T08:39:04-0700\",\n  \"creationDate\": \"1997-09-15T00:00:00-0700\",\n  \"registrarRegistrationExpirationDate\": \"2028-09-13T00:00:00-0700\",\n  \"registrar\": \"MarkMonitor, Inc.\",\n  \"registrarIanaId\": \"292\",\n  \"registrarAbuseContactEmail\": \"abusecomplaints@markmonitor.com\",\n  \"registrarAbuseContactPhone\": \"+1.2083895770\",\n  \"domainStatus\": \"clientUpdateProhibited (https://www.icann.org/epp#clientUpdateProhibited) clientTransferProhibited (https://www.icann.org/epp#clientTransferProhibited) clientDeleteProhibited (https://www.icann.org/epp#clientDeleteProhibited) serverUpdateProhibited (https://www.icann.org/epp#serverUpdateProhibited) serverTransferProhibited (https://www.icann.org/epp#serverTransferProhibited) serverDeleteProhibited (https://www.icann.org/epp#serverDeleteProhibited)\",\n  \"registrantOrganization\": \"Google LLC\",\n  \"registrantStateProvince\": \"CA\",\n  \"registrantCountry\": \"US\",\n  \"registrantEmail\": \"Select Request Email Form at https://domains.markmonitor.com/whois/google.com\",\n  \"adminOrganization\": \"Google LLC\",\n  \"adminStateProvince\": \"CA\",\n  \"adminCountry\": \"US\",\n  \"adminEmail\": \"Select Request Email Form at https://domains.markmonitor.com/whois/google.com\",\n  \"techOrganization\": \"Google LLC\",\n  \"techStateProvince\": \"CA\",\n  \"techCountry\": \"US\",\n  \"techEmail\": \"Select Request Email Form at https://domains.markmonitor.com/whois/google.com\",\n  \"nameServer\": \"ns4.google.com ns2.google.com ns1.google.com ns3.google.com\",\n  \"dnssec\": \"unsigned\",\n  \"urlOfTheIcannWhoisDataProblemReportingSystem\": \"http://wdprs.internic.net/\",\n  \"lastUpdateOfWhoisDatabase\": \"2020-12-05T19:01:07-0800 <<<\"\n}', ''),
(3, 'getbootstrap.com', '104.22.58.100', '{\n  \"domainName\": \"GETBOOTSTRAP.COM\",\n  \"registryDomainId\": \"1696379813_DOMAIN_COM-VRSN\",\n  \"registrarWhoisServer\": \"whois.godaddy.com\",\n  \"registrarUrl\": \"http://www.godaddy.com\",\n  \"updatedDate\": \"2018-12-22T21:02:37Z\",\n  \"creationDate\": \"2012-01-10T21:42:14Z\",\n  \"registrarRegistrationExpirationDate\": \"2023-01-10T21:42:14Z\",\n  \"registrar\": \"GoDaddy.com, LLC\",\n  \"registrarIanaId\": \"146\",\n  \"registrarAbuseContactEmail\": \"abuse@godaddy.com\",\n  \"registrarAbuseContactPhone\": \"+1.4806242505\",\n  \"domainStatus\": \"clientTransferProhibited http://www.icann.org/epp#clientTransferProhibited clientUpdateProhibited http://www.icann.org/epp#clientUpdateProhibited clientRenewProhibited http://www.icann.org/epp#clientRenewProhibited clientDeleteProhibited http://www.icann.org/epp#clientDeleteProhibited\",\n  \"registryRegistrantId\": \"Not Available From Registry\",\n  \"registrantName\": \"Registration Private\",\n  \"registrantOrganization\": \"Domains By Proxy, LLC\",\n  \"registrantStreet\": \"DomainsByProxy.com 14455 N. Hayden Road\",\n  \"registrantCity\": \"Scottsdale\",\n  \"registrantStateProvince\": \"Arizona\",\n  \"registrantPostalCode\": \"85260\",\n  \"registrantCountry\": \"US\",\n  \"registrantPhone\": \"+1.4806242599\",\n  \"registrantPhoneExt\": \"Registrant Fax: +1.4806242598\",\n  \"registrantFaxExt\": \"Registrant Email: GETBOOTSTRAP.COM@domainsbyproxy.com\",\n  \"registryAdminId\": \"Not Available From Registry\",\n  \"adminName\": \"Registration Private\",\n  \"adminOrganization\": \"Domains By Proxy, LLC\",\n  \"adminStreet\": \"DomainsByProxy.com 14455 N. Hayden Road\",\n  \"adminCity\": \"Scottsdale\",\n  \"adminStateProvince\": \"Arizona\",\n  \"adminPostalCode\": \"85260\",\n  \"adminCountry\": \"US\",\n  \"adminPhone\": \"+1.4806242599\",\n  \"adminPhoneExt\": \"Admin Fax: +1.4806242598\",\n  \"adminFaxExt\": \"Admin Email: GETBOOTSTRAP.COM@domainsbyproxy.com\",\n  \"registryTechId\": \"Not Available From Registry\",\n  \"techName\": \"Registration Private\",\n  \"techOrganization\": \"Domains By Proxy, LLC\",\n  \"techStreet\": \"DomainsByProxy.com 14455 N. Hayden Road\",\n  \"techCity\": \"Scottsdale\",\n  \"techStateProvince\": \"Arizona\",\n  \"techPostalCode\": \"85260\",\n  \"techCountry\": \"US\",\n  \"techPhone\": \"+1.4806242599\",\n  \"techPhoneExt\": \"Tech Fax: +1.4806242598\",\n  \"techFaxExt\": \"Tech Email: GETBOOTSTRAP.COM@domainsbyproxy.com\",\n  \"nameServer\": \"IRIS.NS.CLOUDFLARE.COM TOM.NS.CLOUDFLARE.COM\",\n  \"dnssec\": \"signedDelegation\",\n  \"urlOfTheIcannWhoisDataProblemReportingSystem\": \"http://wdprs.internic.net/\",\n  \"lastUpdateOfWhoisDatabase\": \"2020-12-06T03:00:00Z <<<\",\n  \"termsOfUse\": \"The data contained in this registrar\'s Whois database, while believed by the\"\n}', '');

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `domains`
--
ALTER TABLE `domains`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
